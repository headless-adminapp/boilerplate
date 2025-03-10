import { UserAttributes } from '@/app/config/schema/user';
import { formatResponseError } from '@/app/config/server/formatResponseError';
import { serverSchemaStore } from '@/app/config/server/serverSchemaStore';
import {
  getAuthTokenInfo,
  getTokenFromRequest,
} from '@/app/config/server/utils/auth';
import { UnauthorizedError } from '@headless-adminapp/core/transport';
import { NextRequest, NextResponse } from 'next/server';

// This api is designed for mongoose.
// Customize this api as needed for other databases.

export async function GET(req: NextRequest) {
  try {
    const authInfo = getAuthTokenInfo(getTokenFromRequest(req));

    if (!authInfo) {
      throw new UnauthorizedError('Unauthorized');
    }

    const userId = authInfo.id;

    const model = serverSchemaStore.getModel<UserAttributes>('users');

    const user = await model.findById(userId);

    if (!user) {
      throw new UnauthorizedError('Unauthorized');
    }

    return NextResponse.json({
      id: user.id,
      email: user.email ?? '',
      username: user.username ?? '',
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      fullName: `${user.firstName ?? ''} ${user.lastName ?? ''}`,
      exp: authInfo.exp,
    });
  } catch (error) {
    return formatResponseError(error);
  }
}
