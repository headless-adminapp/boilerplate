import { MongoSchemaStore } from '@headless-adminapp/server-sdk-mongo';
import { eventSchema } from '../schema/event';
import { userSchema } from '../schema/user';

export const serverSchemaStore = new MongoSchemaStore();

// Or use SequelizeSchemaStore for SQL databases
// import { SequelizeSchemaStore } from '@headless-adminapp/server-sdk-sequelize';
// new SequelizeSchemaStore({ sequelize });

serverSchemaStore.register(eventSchema);
serverSchemaStore.register(userSchema);

serverSchemaStore.validate();
