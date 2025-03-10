import {
  HttpError,
  UnauthorizedError,
} from '@headless-adminapp/core/transport';
import { NextRequest, NextResponse } from 'next/server';
import { ExecuteParams, IServerSdk } from '@headless-adminapp/server-sdk';
import { MongoServerSdk } from '@headless-adminapp/server-sdk-mongo';
import { dataFilter } from '@/app/config/server/dataFilter';
import { serverSchemaStore } from '@/app/config/server/serverSchemaStore';
import { pluginStore } from '@/app/config/server/pluginStore';
import { SdkContext } from '@/app/config/server/types';
import {
  getAuthTokenInfo,
  getTokenFromRequest,
} from '@/app/config/server/utils/auth';
import dbConnect from '@/app/config/server/db-connect';
import { formatResponseError } from '@/app/config/server/formatResponseError';

// Use SequelizeServerSdk for SQL databases
// import { SequelizeServerSdk } from '@headless-adminapp/server-sdk-sequelize';

export async function POST(req: NextRequest) {
  try {
    // initilize db connection
    await dbConnect();

    // Authenticate request
    const authInfo = getAuthTokenInfo(getTokenFromRequest(req));

    if (!authInfo) {
      throw new UnauthorizedError('Unauthorized');
    }

    const body = await req.json();

    if (body.type === 'customAction') {
      throw new HttpError(400, 'Custom action not supported');
    }

    const sdkOptions = {
      schemaStore: serverSchemaStore,
      dataFilter,
      pluginStore,
      context: {
        locale: 'en-US',
        timezone: 'UTC',
        auth: {
          userId: authInfo.id,
        },
      } as SdkContext,
    };

    // setup and configure sdk
    const sdk: IServerSdk = new MongoServerSdk({
      ...sdkOptions,
    });

    // Or use SequelizeServerSdk for SQL databases
    // const sdk: IServerSdk = new SequelizeServerSdk({
    //   ...sdkOptions,
    //   sequelize,
    // });

    // execute sdk message
    const result = await sdk.execute(body as ExecuteParams);

    return NextResponse.json(result);
  } catch (error) {
    return formatResponseError(error);
  }
}
