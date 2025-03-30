import {
  DateAxisTickFormat,
  defineChartInfo,
} from '@headless-adminapp/core/experience/insights';
import { WidgetChart } from '@headless-adminapp/fluent/Insights/WidgetChartContainer';
import { FC } from 'react';
import dayjs from 'dayjs';
import { tokens } from '@fluentui/react-components';

const chartInfo = defineChartInfo({
  type: 'composed',
  areas: [
    {
      dataIndex: 0,
      dataKey: 'amount',
      type: 'currency',
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
});

const data = Array.from({ length: 6 }, (_, i) => {
  return {
    amount: Math.floor(Math.random() * 100),
    refund: Math.floor(Math.random() * 100),
    date: dayjs()
      .startOf('month')
      .subtract(6 - i, 'month')
      .valueOf(),
  };
});

export const WidgetChartComposed: FC = () => {
  return (
    <WidgetChart
      dataset={[data]}
      isFetching={false}
      isPending={false}
      title="Composed Chart"
      chartInfo={chartInfo}
    />
  );
};
