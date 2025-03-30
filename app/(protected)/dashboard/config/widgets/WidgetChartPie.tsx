import { defineChartInfo } from '@headless-adminapp/core/experience/insights';
import { WidgetChart } from '@headless-adminapp/fluent/Insights/WidgetChartContainer';
import { FC } from 'react';

const chartInfo = defineChartInfo({
  type: 'pie',
  showLegend: true,
  pie: [
    {
      dataKey: 'count',
      nameKey: 'device',
      dataTick: {
        type: 'number',
      },
      nameTick: {
        type: 'category',
      },
    },
  ],
});

const data = [
  {
    device: 'Desktop',
    count: 100,
  },
  {
    device: 'Mobile',
    count: 200,
  },
  {
    device: 'Tablet',
    count: 300,
  },
];

export const WidgetChartPie: FC = () => {
  return (
    <WidgetChart
      dataset={[data]}
      isFetching={false}
      isPending={false}
      title="Pie Chart"
      chartInfo={chartInfo}
    />
  );
};
