import {
  DateAxisTickFormat,
  InsightExpereince,
} from '@headless-adminapp/core/experience/insights';
import dayjs from 'dayjs';
import { tokens } from '@fluentui/react-components';
import { InsightsAttributes } from '../attributes';

export const widgetChartComposed: InsightExpereince<InsightsAttributes>['widgets'][number] =
  {
    attributes: {},
    title: 'Composed Chart',
    rows: 2,
    columns: 4,
    dataset: [
      {
        type: 'constant',
        value: Array.from({ length: 6 }, (_, i) => {
          return {
            amount: Math.floor(Math.random() * 100),
            refund: Math.floor(Math.random() * 100),
            date: dayjs()
              .startOf('month')
              .subtract(length - i, 'month')
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
          type: 'composed',
          areas: [
            {
              dataIndex: 0,
              dataKey: 'amount',
              dataType: 'money',
              dataLabel: 'Amount',
              curveType: 'monotone',
              color: tokens.colorBrandBackground,
            },
          ],
          bars: [
            {
              dataIndex: 0,
              dataKey: 'refund',
              dataType: 'money',
              dataLabel: 'Refund',
              color: tokens.colorPaletteRedForeground1,
              curveType: 'linear',
            },
          ],
          xAxis: {
            dataKey: 'date',
            tick: {
              type: 'time',
              format: DateAxisTickFormat.YearMonth,
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
