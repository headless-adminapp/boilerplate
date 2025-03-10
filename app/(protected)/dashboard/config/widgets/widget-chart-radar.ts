import { InsightExpereince } from '@headless-adminapp/core/experience/insights';
import { InsightsAttributes } from '../attributes';
import { tokens } from '@fluentui/react-components';

export const widgetChartRadar: InsightExpereince<InsightsAttributes>['widgets'][number] =
  {
    attributes: {},
    title: 'Radar Chart',
    rows: 2,
    columns: 4,
    dataset: [
      {
        type: 'constant',
        value: [
          {
            payment_method: 'card',
            count: 10,
          },
          {
            payment_method: 'link',
            count: 5,
          },
          {
            payment_method: 'online',
            count: 3,
          },
        ],
      },
    ],
    defaultData: {},
    content: {
      type: 'chart',
      commands: [],
      chart: {
        chart: {
          type: 'radar',
          radar: [
            {
              dataIndex: 0,
              dataKey: 'count',
              nameKey: 'payment_method',
              dataTick: {
                type: 'number',
              },
              nameTick: {
                type: 'category',
                options: [
                  {
                    label: 'Card',
                    value: 'card',
                  },
                  {
                    label: 'Link',
                    value: 'link',
                  },
                ],
              },
              color: tokens.colorBrandBackground,
            },
          ],
        },
      },
    },
  };
