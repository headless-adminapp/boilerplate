import { NextRequest, NextResponse } from 'next/server';
import { BadRequestError } from '@headless-adminapp/core/transport';
import jwt from 'jsonwebtoken';
import dbConnect from '@/app/config/server/db-connect';
import { serverSchemaStore } from '@/app/config/server/serverSchemaStore';
import { UserAttributes } from '@/app/config/schema/user';
import { formatResponseError } from '@/app/config/server/formatResponseError';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = 60 * 60 * 24; // 1 day;

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();

    if (!body.username || !body.password) {
      throw new BadRequestError('Username and password are required');
    }

    const model = serverSchemaStore.getModel<UserAttributes>('users');
    const user = await model.findOne({
      username: body.username,
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'Invalid username or password',
      });
    }

    // Add your password hashing logic here
    // We recommend to store password hash in different table than user data
    // to prevent leaking password hash when querying user data

    const token = jwt.sign({ id: user._id }, JWT_SECRET as string, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return NextResponse.json(
      {
        success: true,
        token,
        user: {
          id: user._id,
          name: user.firstName,
          email: user.email,
        },
      },
      {
        headers: {
          'Set-Cookie': `token=${token}; Path=/; Max-Age=${JWT_EXPIRES_IN}`,
        },
      }
    );
  } catch (error) {
    return formatResponseError(error);
  }
}
