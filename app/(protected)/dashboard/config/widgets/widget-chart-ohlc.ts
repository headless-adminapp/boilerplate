import {
  DateAxisTickFormat,
  DateAxisTickInterval,
  InsightExpereince,
} from '@headless-adminapp/core/experience/insights';
import { InsightsAttributes } from '../attributes';

export const widgetChartOhlc: InsightExpereince<InsightsAttributes>['widgets'][number] =
  {
    attributes: {},
    title: 'OHLC Chart',
    rows: 2,
    columns: 4,
    dataset: [
      {
        type: 'constant',
        value: Array.from({ length: 10 }, (_, i) => {
          const date = new Date();
          date.setMonth(date.getMonth() - i);
          return {
            date: date.getTime(),
            open: Math.random() * 100,
            high: Math.random() * 100 + 100,
            low: Math.random() * 100 - 100,
            close: Math.random() * 100,
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
          type: 'ohlc',
          xAxis: {
            dataKey: 'date',
            name: 'Date',
            tick: {
              type: 'time',
              format: DateAxisTickFormat.YearMonth,
              interval: DateAxisTickInterval.Month,
            },
            domain: ['dataMin', 'dataMax'],
          },
          yAxis: {
            tick: {
              type: 'currency',
            },
          },
          bars: [
            {
              dataIndex: 0,
              open: {
                dataKey: 'open',
                dataLabel: 'Open',
              },
              high: {
                dataKey: 'high',
                dataLabel: 'High',
              },
              low: {
                dataKey: 'low',
                dataLabel: 'Low',
              },
              close: {
                dataKey: 'close',
                dataLabel: 'Close',
              },
            },
          ],
        },
      },
    },
  };
