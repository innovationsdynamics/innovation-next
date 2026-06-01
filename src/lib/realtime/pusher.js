import Pusher from 'pusher';

let pusherServer = null;

function getPusherServer() {
  const appId = process.env.PUSHER_APP_ID;
  const key = process.env.PUSHER_KEY;
  const secret = process.env.PUSHER_SECRET;
  const cluster = process.env.PUSHER_CLUSTER;

  if (!appId || !key || !secret || !cluster) {
    return null;
  }

  if (!pusherServer) {
    pusherServer = new Pusher({
      appId,
      key,
      secret,
      cluster,
      useTLS: true,
    });
  }

  return pusherServer;
}

export function isPusherConfigured() {
  return !!(
    process.env.PUSHER_APP_ID &&
    process.env.PUSHER_KEY &&
    process.env.PUSHER_SECRET &&
    process.env.PUSHER_CLUSTER
  );
}

export async function emitAdminEvent(event, data) {
  const pusher = getPusherServer();
  if (!pusher) {
    console.log(`[Realtime] Pusher not configured, skipping event: ${event}`);
    return false;
  }

  try {
    await pusher.trigger('admin-channel', event, data);
    return true;
  } catch (error) {
    console.error(`[Realtime] Failed to emit ${event}:`, error.message);
    return false;
  }
}

export async function emitChatEvent(chatId, event, data) {
  const pusher = getPusherServer();
  if (!pusher) {
    return false;
  }

  try {
    await pusher.trigger(`chat-${chatId}`, event, data);
    await pusher.trigger('admin-channel', event, { chatId, ...data });
    return true;
  } catch (error) {
    console.error(`[Realtime] Failed to emit chat ${event}:`, error.message);
    return false;
  }
}

/** Drop-in replacement for Socket.io server used in Express controllers */
export const realtimeIO = {
  emit(event, data) {
    emitAdminEvent(event, data).catch(() => {});
  },
  to() {
    return this;
  },
};
