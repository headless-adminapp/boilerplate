import { InsightExpereince } from '@headless-adminapp/core/experience/insights';
import { InsightsAttributes } from '../attributes';

export const widgetChartBar: InsightExpereince<InsightsAttributes>['widgets'][number] =
  {
    attributes: {},
    defaultData: {},
    dataset: [
      {
        type: 'constant',
        value: [
          {
            day: 'Monday',
            count: 100,
          },
          {
            day: 'Tuesday',
            count: 200,
          },
          {
            day: 'Wednesday',
            count: 300,
          },
          {
            day: 'Thursday',
            count: 400,
          },
          {
            day: 'Friday',
            count: 500,
          },
          {
            day: 'Saturday',
            count: 600,
          },
          {
            day: 'Sunday',
            count: 700,
          },
        ],
      },
    ],
    title: 'Bar Chart',
    columns: 4,
    rows: 2,
    content: {
      type: 'chart',
      commands: [],
      chart: {
        chart: {
          type: 'bar',
          bars: [
            {
              dataKey: 'count',
              dataLabel: 'Visits',
              dataType: 'number',
              color: '#8884d8',
            },
          ],
          xAxis: {
            dataKey: 'day',
            name: 'Weekday',
            tick: {
              type: 'category',
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
