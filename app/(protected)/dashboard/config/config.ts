import { InsightConfig } from '@headless-adminapp/core/experience/insights';
import dayjs from 'dayjs';
import { CustomWidget } from './CustomWidget';
import { InsightsAttributes, attributes } from './attributes';
import { WidgetChartLine } from './widgets/WidgetChartLine';
import { WidgetChartArea } from './widgets/WidgetChartArea';
import { WidgetChartBar } from './widgets/WidgetChartBar';
import { WidgetChartComposed } from './widgets/WidgetChartComposed';
import { WidgetChartScatter } from './widgets/WidgetChartScatter';
import { WidgetChartPie } from './widgets/WidgetChartPie';
import { WidgetChartRadar } from './widgets/WidgetChartRadar';
import { WidgetChartOhlc } from './widgets/WidgetChartOhlc';

export const config: InsightConfig<InsightsAttributes> = {
  title: 'Dashboard',
  subtitle: 'Dashboard for insights',
  filterAttributes: attributes,
  defaultFilter: {
    from: dayjs().startOf('week').subtract(12, 'week').toISOString(),
    to: dayjs().endOf('week').subtract(1, 'week').toISOString(),
  },
  widgets: [
    {
      type: 'component',
      rows: 2,
      columns: 4,
      Component: WidgetChartLine,
    },
    {
      type: 'component',
      rows: 2,
      columns: 4,
      Component: WidgetChartArea,
    },
    {
      type: 'component',
      rows: 2,
      columns: 4,
      Component: WidgetChartBar,
    },
    {
      type: 'component',
      rows: 2,
      columns: 4,
      Component: WidgetChartComposed,
    },
    {
      type: 'component',
      rows: 2,
      columns: 4,
      Component: WidgetChartScatter,
    },
    {
      type: 'component',
      rows: 2,
      columns: 4,
      Component: WidgetChartPie,
    },
    {
      type: 'component',
      rows: 2,
      columns: 4,
      Component: WidgetChartRadar,
    },
    {
      type: 'component',
      rows: 2,
      columns: 4,
      Component: WidgetChartOhlc,
    },
    {
      type: 'component',
      rows: 2,
      columns: 4,
      Component: CustomWidget,
    },
  ],
};
