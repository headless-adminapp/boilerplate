import {
  ExecutionStage,
  MessageName,
  PluginStore,
} from '@headless-adminapp/server-sdk';

// References:
// https://headless-adminapp.github.io/docs/getting-started/configuration/server/plugin
// https://headless-adminapp.github.io/docs/api-reference/server/plugin

export const pluginStore = new PluginStore();

pluginStore.register({
  logicalName: '',
  messageName: MessageName.Create,
  stage: ExecutionStage.PreOperation,
  attributes: [],
  action: async (context) => {
    // This code will run before the Create operation for any entity
  },
});

pluginStore.register({
  logicalName: 'events',
  messageName: MessageName.Update,
  stage: ExecutionStage.PostOperation,
  attributes: ['status'],
  action: async (context) => {
    // This code will run after the Update operation for the `events` entity when the `status` attribute is updated
  },
});
