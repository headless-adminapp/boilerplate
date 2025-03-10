import { InsightExpereince } from '@headless-adminapp/core/experience/insights';
import { InsightsAttributes } from '../attributes';
import { tokens } from '@fluentui/react-components';

export const widgetChartScatter: InsightExpereince<InsightsAttributes>['widgets'][number] =
  {
    attributes: {},
    title: 'Scatter Chart',
    rows: 2,
    columns: 4,
    dataset: [
      {
        type: 'constant',
        value: [
          { week_day: 1, hours: 1, count: 7 },
          { week_day: 1, hours: 2, count: 78 },
          { week_day: 1, hours: 3, count: 2 },
          { week_day: 2, hours: 1, count: 12 },
          { week_day: 2, hours: 2, count: 7 },
          { week_day: 3, hours: 1, count: 15 },
          { week_day: 3, hours: 2, count: 40 },
          { week_day: 4, hours: 1, count: 3 },
          { week_day: 4, hours: 2, count: 11 },
          { week_day: 4, hours: 3, count: 1 },
          { week_day: 5, hours: 1, count: 3 },
          { week_day: 5, hours: 2, count: 5 },
          { week_day: 6, hours: 1, count: 1 },
          { week_day: 6, hours: 2, count: 4 },
          { week_day: 6, hours: 3, count: 1 },
          { week_day: 7, hours: 1, count: 1 },
          { week_day: 7, hours: 2, count: 8 },
        ],
      },
      {
        type: 'constant',
        value: [
          { week_day: 1, hours: 1, count: 14 },
          { week_day: 1, hours: 2, count: 18 },
          { week_day: 2, hours: 1, count: 14 },
          { week_day: 2, hours: 2, count: 72 },
          { week_day: 3, hours: 1, count: 20 },
          { week_day: 3, hours: 2, count: 60 },
          { week_day: 3, hours: 3, count: 3 },
          { week_day: 4, hours: 1, count: 16 },
          { week_day: 4, hours: 2, count: 79 },
          { week_day: 4, hours: 3, count: 2 },
          { week_day: 4, hours: 4, count: 2 },
          { week_day: 5, hours: 1, count: 32 },
          { week_day: 5, hours: 2, count: 75 },
          { week_day: 5, hours: 3, count: 3 },
          { week_day: 5, hours: 4, count: 1 },
          { week_day: 6, hours: 1, count: 19 },
          { week_day: 6, hours: 2, count: 63 },
          { week_day: 6, hours: 3, count: 1 },
          { week_day: 6, hours: 4, count: 2 },
          { week_day: 7, hours: 1, count: 10 },
          { week_day: 7, hours: 2, count: 44 },
        ],
      },
    ],
    defaultData: {},
    content: {
      type: 'chart',
      commands: [],
      chart: {
        chart: {
          type: 'scatter',
          xAxis: {
            dataKey: 'week_day',
            name: 'Weekday',
            tick: {
              type: 'weekday',
            },
          },
          yAxis: {
            dataKey: 'hours',
            name: 'Hours',
            tick: {
              type: 'number',
            },
          },
          zAxis: {
            dataKey: 'count',
            name: 'Count',
            range: [50, 200],
            tick: {
              type: 'number',
            },
          },
          scatters: [
            {
              dataIndex: 0,
              dataKey: 'count',
              dataType: 'number',
              dataLabel: 'Orders',
              color: tokens.colorBrandBackground,
            },
            {
              dataIndex: 1,
              dataKey: 'count',
              dataType: 'number',
              dataLabel: 'Cancelled',
              color: tokens.colorPaletteRedForeground1,
            },
          ],
        },
      },
    },
  };
