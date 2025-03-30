'use client';

import { config } from './config';
import { PageInsights } from '@headless-adminapp/fluent/PageInsights';

export default function DashboardPage() {
  return <PageInsights config={config} />;
}
