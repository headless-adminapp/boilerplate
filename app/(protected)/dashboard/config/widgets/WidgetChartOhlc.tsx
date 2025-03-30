import {
  DateAxisTickFormat,
  DateAxisTickInterval,
  defineChartInfo,
} from '@headless-adminapp/core/experience/insights';
import { WidgetChart } from '@headless-adminapp/fluent/Insights/WidgetChartContainer';
import { FC } from 'react';

const chartInfo = defineChartInfo({
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
});

const data = Array.from({ length: 10 }, (_, i) => {
  const date = new Date();
  date.setMonth(date.getMonth() - i);
  return {
    date: date.getTime(),
    open: Math.random() * 100,
    high: Math.random() * 100 + 100,
    low: Math.random() * 100 - 100,
    close: Math.random() * 100,
  };
});

export const WidgetChartOhlc: FC = () => {
  return (
    <WidgetChart
      dataset={[data]}
      isFetching={false}
      isPending={false}
      title="OHLC Chart"
      chartInfo={chartInfo}
    />
  );
};
