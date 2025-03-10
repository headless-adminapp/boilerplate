import { eventSchema } from '@/app/config/schema/event';
import { RecordItem } from './RecordItem';
import { defineBoardConfig } from '@headless-adminapp/app/board/utils';

export const boardConfig = defineBoardConfig({
  title: 'Board Page',
  description: 'Drag and drop to change status',
  schema: eventSchema,
  sorting: [
    {
      field: 'createdAt',
      order: 'desc',
    },
  ],
  projection: {
    columns: ['title', 'createdAt', 'updatedAt'],
  },
  PreviewComponent: RecordItem,
  columnConfigs: [
    {
      columnId: 'open',
      title: 'Open',
      filter: {
        type: 'and',
        conditions: [
          {
            field: 'status',
            operator: 'eq',
            value: 'open',
          },
        ],
      },
      acceptSourceIds: ['in_progress', 'resolved'],
      updateFn: async (context) => {
        try {
          context.utility.showProgressIndicator();
          await context.dataService.updateRecord(
            context.primaryControl.logicalName,
            context.primaryControl.id,
            {
              status: 'open',
            }
          );
          context.queryClient.invalidateQueries({
            queryKey: [
              'data',
              'retriveRecords',
              context.primaryControl.logicalName,
            ],
          });
        } finally {
          context.utility.hideProgressIndicator();
        }
      },
    },
    {
      columnId: 'in_progress',
      title: 'In Progress',
      filter: {
        type: 'and',
        conditions: [
          {
            field: 'status',
            operator: 'eq',
            value: 'in_progress',
          },
        ],
      },
      acceptSourceIds: ['open', 'resolved'],
      updateFn: async (context) => {
        try {
          context.utility.showProgressIndicator();

          await context.dataService.updateRecord(
            context.primaryControl.logicalName,
            context.primaryControl.id,
            {
              status: 'in_progress',
            }
          );
          context.queryClient.invalidateQueries({
            queryKey: [
              'data',
              'retriveRecords',
              context.primaryControl.logicalName,
            ],
          });
        } finally {
          context.utility.hideProgressIndicator();
        }
      },
    },
    {
      columnId: 'resolved',
      title: 'Resolved',
      filter: {
        type: 'and',
        conditions: [
          {
            field: 'status',
            operator: 'eq',
            value: 'resolved',
          },
        ],
      },
      acceptSourceIds: ['open', 'in_progress'],
      updateFn: async (context) => {
        try {
          context.utility.showProgressIndicator();
          await context.dataService.updateRecord(
            context.primaryControl.logicalName,
            context.primaryControl.id,
            {
              status: 'resolved',
            }
          );
          context.queryClient.invalidateQueries({
            queryKey: [
              'data',
              'retriveRecords',
              context.primaryControl.logicalName,
            ],
          });
        } finally {
          context.utility.hideProgressIndicator();
        }
      },
    },
  ],
});
