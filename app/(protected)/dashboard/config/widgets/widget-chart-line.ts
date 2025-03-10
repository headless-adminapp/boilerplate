import {
  DateAxisTickFormat,
  InsightExpereince,
} from '@headless-adminapp/core/experience/insights';
import dayjs from 'dayjs';
import { InsightsAttributes } from '../attributes';

export const widgetChartLine: InsightExpereince<InsightsAttributes>['widgets'][number] =
  {
    attributes: {},
    title: 'Line Chart',
    rows: 2,
    columns: 4,
    dataset: [
      {
        type: 'constant',
        value: Array.from({ length: 6 }, (_, i) => {
          return {
            count: Math.floor(Math.random() * 100),
            week: dayjs()
              .startOf('week')
              .subtract(length - i, 'week')
              .valueOf(),
          };
        }),
      },
    ],
    defaultData: {},
    content: {
      type: 'chart',
      commands: [],
      chart: {
        chart: {
          type: 'line',
          lines: [
            {
              dataKey: 'count',
              type: 'number',
              dataLabel: 'Downloads',
              curveType: 'monotone',
            },
          ],
          xAxis: {
            dataKey: 'week',
            name: 'Week Start',
            tick: {
              type: 'time',
              format: DateAxisTickFormat.Date,
            },
            domain: ['dataMin', 'dataMax'],
          },
          yAxis: {
            tick: {
              type: 'number',
            },
          },
        },
      },
    },
  };
