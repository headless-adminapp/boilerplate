import { SchemaExperienceStore } from '@headless-adminapp/app/store';

import { clientSchemaStore } from './schemaStore';
import { eventSchemaExperience } from './experience/event';
import { userSchemaExperience } from './experience/user';

export const clientExperienceStore = new SchemaExperienceStore({
  schemaStore: clientSchemaStore,
});

clientExperienceStore.register(eventSchemaExperience);
clientExperienceStore.register(userSchemaExperience);
