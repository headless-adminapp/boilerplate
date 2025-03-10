// Modify this file as needed to implement your own authentication logic.

import Jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET;

export interface AuthTokenInfo {
  id: string;
  iat: number;
  exp: number;
  locale?: string;
  timezone?: string;
}

export function getAuthTokenInfo(
  token: string | undefined | null
): AuthTokenInfo | null {
  if (!JWT_SECRET) {
    return null;
  }

  if (!token) {
    return null;
  }

  let decoded: Jwt.JwtPayload | undefined;
  try {
    decoded = Jwt.verify(token, JWT_SECRET) as Jwt.JwtPayload;
  } catch {
    //
  }

  if (!decoded?.exp) {
    return null;
  }

  return decoded as AuthTokenInfo;
}

export function getTokenFromRequest(req: NextRequest): string | null {
  if (req.headers.get('authorization')) {
    const authorization = req.headers.get('authorization');

    if (authorization?.startsWith('Bearer ')) {
      return authorization.substring(7);
    }
  }

  if (req.cookies.get('token')) {
    const token = req.cookies.get('token');

    if (typeof token?.value === 'string') {
      return token.value;
    }
  }

  return null;
}
