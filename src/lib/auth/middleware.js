import jwt from 'jsonwebtoken';
import User from '@/lib/models/User';

export async function getUserFromRequest(request) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    return user || null;
  } catch {
    return null;
  }
}

export async function protectRequest(request) {
  const user = await getUserFromRequest(request);
  if (!user) {
    const error = new Error('Not authorized, no token');
    error.statusCode = 401;
    throw error;
  }
  return user;
}

export function requireAdmin(user) {
  if (!user || !user.isAdmin) {
    const error = new Error('Not authorized as an admin');
    error.statusCode = 401;
    throw error;
  }
}
