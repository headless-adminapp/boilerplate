import { InsightExpereince } from '@headless-adminapp/core/experience/insights';
import { InsightsAttributes } from '../attributes';

export const widgetChartPie: InsightExpereince<InsightsAttributes>['widgets'][number] =
  {
    attributes: {},
    defaultData: {},
    title: 'Pie Chart',
    columns: 4,
    rows: 2,
    dataset: [
      {
        type: 'constant',
        value: [
          {
            device: 'Desktop',
            count: 100,
          },
          {
            device: 'Mobile',
            count: 200,
          },
          {
            device: 'Tablet',
            count: 300,
          },
        ],
      },
    ],
    content: {
      type: 'chart',
      commands: [],
      chart: {
        chart: {
          type: 'pie',
          showLegend: true,
          pie: [
            {
              dataKey: 'count',
              nameKey: 'device',
              dataTick: {
                type: 'number',
              },
              nameTick: {
                type: 'category',
              },
            },
          ],
        },
      },
    },
  };
