import { InsightExpereince } from '@headless-adminapp/core/experience/insights';
import { bundleLazyIcon } from '@headless-adminapp/icons-fluent/lazyIcon';
import dayjs from 'dayjs';
import { CustomWidget } from './CustomWidget';
import { InsightsAttributes, attributes } from './attributes';
import { widgetChartArea } from './widgets/widget-chart-area';
import { widgetChartBar } from './widgets/widget-chart-bar';
import { widgetChartPie } from './widgets/widget-chart-pie';
import { widgetGrid } from './widgets/widget-grid';
import { widgetChartLine } from './widgets/widget-chart-line';
import { widgetChartComposed } from './widgets/widget-chart-composed';
import { widgetChartScatter } from './widgets/widget-chart-scatter';
import { widgetChartRadar } from './widgets/widget-chart-radar';
import { widgetChartOhlc } from './widgets/widget-chart-ohlc';

export const insightExpereince: InsightExpereince<InsightsAttributes> = {
  id: 'dashboard',
  title: 'Dashboard',
  subtitle: 'Dashboard for insights',
  commands: [
    {
      type: 'button',
      Icon: bundleLazyIcon(
        'ArrowCounterclockwise24Regular',
        'ArrowCounterclockwise24Regular'
      ),
      text: 'Refresh',
      onClick: (context) => {
        context.queryClient.invalidateQueries({
          queryKey: ['insights'],
        });
      },
    },
  ],
  attributes,
  defaultData: {
    from: dayjs().startOf('week').subtract(12, 'week').toISOString(),
    to: dayjs().endOf('week').subtract(1, 'week').toISOString(),
  },
  filters: [
    {
      logicalName: 'from',
    },
    {
      logicalName: 'to',
    },
  ],
  widgets: [
    widgetChartLine,
    widgetChartArea,
    widgetChartBar,
    widgetChartComposed,
    widgetChartScatter,
    widgetChartPie,
    widgetChartRadar,
    widgetChartOhlc,
    widgetGrid,
    {
      attributes: {},
      defaultData: {},
      title: 'Custom Widget',
      rows: 4,
      columns: 4,
      dataset: [],
      content: {
        type: 'custom',
        commands: [],
        Component: CustomWidget,
      },
    },
  ],
};
