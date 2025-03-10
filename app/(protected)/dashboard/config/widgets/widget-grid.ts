import { InsightExpereince } from '@headless-adminapp/core/experience/insights';
import { InsightsAttributes } from '../attributes';

export const widgetGrid: InsightExpereince<InsightsAttributes>['widgets'][number] =
  {
    attributes: {},
    defaultData: {},
    title: 'Data Grid',
    columns: 4,
    rows: 2,
    dataset: [],
    content: {
      type: 'grid',
      commands: [],
      logicalName: 'events',
      maxRecords: 5,
    },
  };
