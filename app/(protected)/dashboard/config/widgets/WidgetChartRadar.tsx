import { tokens } from '@fluentui/react-components';
import { defineChartInfo } from '@headless-adminapp/core/experience/insights';
import { WidgetChart } from '@headless-adminapp/fluent/Insights/WidgetChartContainer';
import { FC } from 'react';

const chartInfo = defineChartInfo({
  type: 'radar',
  radar: [
    {
      dataIndex: 0,
      dataKey: 'count',
      nameKey: 'payment_method',
      dataTick: {
        type: 'number',
      },
      nameTick: {
        type: 'category',
        options: [
          {
            label: 'Card',
            value: 'card',
          },
          {
            label: 'Link',
            value: 'link',
          },
        ],
      },
      color: tokens.colorBrandBackground,
    },
  ],
});

const data = [
  {
    payment_method: 'card',
    count: 10,
  },
  {
    payment_method: 'link',
    count: 5,
  },
  {
    payment_method: 'online',
    count: 3,
  },
];

export const WidgetChartRadar: FC = () => {
  return (
    <WidgetChart
      dataset={[data]}
      isFetching={false}
      isPending={false}
      title="Radar Chart"
      chartInfo={chartInfo}
    />
  );
};
