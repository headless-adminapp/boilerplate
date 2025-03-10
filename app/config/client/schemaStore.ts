import { SchemaStore } from '@headless-adminapp/core/store';
import { eventSchema } from '../schema/event';
import { userSchema } from '../schema/user';

export const clientSchemaStore = new SchemaStore();

clientSchemaStore.register(eventSchema);
clientSchemaStore.register(userSchema);

clientSchemaStore.validate();
