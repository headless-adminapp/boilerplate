import { Filter } from '@headless-adminapp/core/transport';
import {
  DatabaseContext,
  IDataFilter,
  ServerSdkContext,
} from '@headless-adminapp/server-sdk';

export const dataFilter: IDataFilter<ServerSdkContext, DatabaseContext> = {
  getOrganizationFilter(): Filter | null {
    // Return  custom filter condition
    return null;
  },
  getPermissionFilter(): Filter | null {
    // Return  custom filter condition
    return null;
  },
};
