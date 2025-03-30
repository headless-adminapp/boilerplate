import { defineChartInfo } from '@headless-adminapp/core/experience/insights';
import { WidgetChart } from '@headless-adminapp/fluent/Insights/WidgetChartContainer';
import { FC } from 'react';

const chartInfo = defineChartInfo({
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
});

const data = [
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
];

export const WidgetChartBar: FC = () => {
  return (
    <WidgetChart
      dataset={[data]}
      isFetching={false}
      isPending={false}
      title="Bar Chart"
      chartInfo={chartInfo}
    />
  );
};
