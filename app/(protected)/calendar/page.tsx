'use client';

import { PageCalendar } from '@headless-adminapp/fluent/PageCalendar';
import { calendarConfig } from './config';

export default function Page() {
  return <PageCalendar config={calendarConfig} />;
}
