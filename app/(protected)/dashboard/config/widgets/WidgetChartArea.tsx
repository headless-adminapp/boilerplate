import {
  DateAxisTickFormat,
  defineChartInfo,
} from '@headless-adminapp/core/experience/insights';
import { WidgetChart } from '@headless-adminapp/fluent/Insights/WidgetChartContainer';
import { FC } from 'react';
import dayjs from 'dayjs';

const chartInfo = defineChartInfo({
  type: 'area',
  areas: [
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
});

const data = Array.from({ length: 6 }, (_, i) => {
  return {
    count: Math.floor(Math.random() * 100),
    week: dayjs()
      .startOf('week')
      .subtract(6 - i, 'week')
      .valueOf(),
  };
});

export const WidgetChartArea: FC = () => {
  return (
    <WidgetChart
      dataset={[data]}
      isFetching={false}
      isPending={false}
      title="Area Chart"
      chartInfo={chartInfo}
    />
  );
};
