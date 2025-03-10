import { ServerSdkContext } from '@headless-adminapp/server-sdk';

export interface SdkContext extends ServerSdkContext {
  // Define custom context properties here
  auth: {
    userId: string;
  };
}
