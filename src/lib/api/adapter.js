import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/connect';
import { getUserFromRequest } from '@/lib/auth/middleware';
import { realtimeIO } from '@/lib/realtime/pusher';

function createResponseObject() {
  let statusCode = 200;
  let body = null;
  let ended = false;

  const res = {
    status(code) {
      statusCode = code;
      return res;
    },
    json(data) {
      body = data;
      ended = true;
      return res;
    },
    send(data) {
      body = data;
      ended = true;
      return res;
    },
    getStatusCode() {
      return statusCode;
    },
    getBody() {
      return body;
    },
    isEnded() {
      return ended;
    },
  };

  return res;
}

async function parseRequestBody(request) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const body = {};
    const files = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        files.push({
          fieldname: key,
          originalname: value.name,
          mimetype: value.type,
          buffer,
          size: value.size,
        });
      } else {
        if (body[key] !== undefined) {
          if (!Array.isArray(body[key])) {
            body[key] = [body[key]];
          }
          body[key].push(value);
        } else {
          body[key] = value;
        }
      }
    }

    return { body, files };
  }

  if (contentType.includes('application/json')) {
    try {
      const body = await request.json();
      return { body, files: [] };
    } catch {
      return { body: {}, files: [] };
    }
  }

  try {
    const text = await request.text();
    if (!text) return { body: {}, files: [] };
    return { body: JSON.parse(text), files: [] };
  } catch {
    return { body: {}, files: [] };
  }
}

function buildQuery(url) {
  const params = {};
  url.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

export function createHandler(handler, options = {}) {
  const { requireAuth = false, requireAdmin = false } = options;

  return async function routeHandler(request, context = {}) {
    await connectDB();

    const resObj = createResponseObject();
    const url = new URL(request.url);
    const params = context.params ? await context.params : {};
    const { body, files } = await parseRequestBody(request);

    let user = null;
    if (requireAuth || requireAdmin) {
      user = await getUserFromRequest(request);
      if (!user) {
        return NextResponse.json(
          { message: 'Not authorized, no token' },
          { status: 401 }
        );
      }
      if (requireAdmin && !user.isAdmin) {
        return NextResponse.json(
          { message: 'Not authorized as an admin' },
          { status: 401 }
        );
      }
    } else {
      user = await getUserFromRequest(request);
    }

    const req = {
      method: request.method,
      body,
      params,
      query: buildQuery(url),
      user,
      files,
      file: files[0] || undefined,
      headers: Object.fromEntries(request.headers.entries()),
      app: {
        get(key) {
          if (key === 'io') return realtimeIO;
          return null;
        },
      },
    };

    try {
      await new Promise((resolve, reject) => {
        const next = (err) => {
          if (err) reject(err);
          else resolve();
        };

        const result = handler(req, resObj, next);

        if (result && typeof result.then === 'function') {
          result.then(resolve).catch(reject);
        } else if (resObj.isEnded()) {
          resolve();
        }
      });

      if (!resObj.isEnded()) {
        return NextResponse.json(
          { message: 'No response from handler' },
          { status: 500 }
        );
      }

      const responseBody = resObj.getBody();
      const status = resObj.getStatusCode();

      if (typeof responseBody === 'string' && !responseBody.startsWith('{')) {
        return new NextResponse(responseBody, { status });
      }

      return NextResponse.json(responseBody ?? {}, { status });
    } catch (error) {
      console.error(`API Error [${request.method} ${url.pathname}]:`, error.message);
      const statusCode = error.statusCode || (resObj.getStatusCode() !== 200 ? resObj.getStatusCode() : 500);
      return NextResponse.json(
        {
          message: error.message || 'Server Error',
          stack: process.env.NODE_ENV === 'production' ? null : error.stack,
        },
        { status: statusCode === 200 ? 500 : statusCode }
      );
    }
  };
}

export function routeHandlers(handlers, options = {}) {
  return {
    GET: handlers.GET ? createHandler(handlers.GET, options) : undefined,
    POST: handlers.POST ? createHandler(handlers.POST, options) : undefined,
    PUT: handlers.PUT ? createHandler(handlers.PUT, options) : undefined,
    PATCH: handlers.PATCH ? createHandler(handlers.PATCH, options) : undefined,
    DELETE: handlers.DELETE ? createHandler(handlers.DELETE, options) : undefined,
  };
}
