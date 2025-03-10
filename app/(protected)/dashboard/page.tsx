'use client';

import { InsightExpereince } from '@headless-adminapp/core/experience/insights';
import { insightExpereince } from './config';
import { useState } from 'react';
import { PageInsights } from '@headless-adminapp/fluent/PageInsights';

const insights = [insightExpereince] as unknown as InsightExpereince[];

export default function DashboardPage() {
  const [selectedInsightId, setSelectedInsightId] = useState(insights[0].id);

  return (
    <PageInsights
      insights={insights}
      insightId={selectedInsightId}
      onChangeInsight={setSelectedInsightId}
    />
  );
}
