'use client';

import { PageBoard } from '@headless-adminapp/fluent/PageBoard';
import { boardConfig } from './config';

export default function Page() {
  return <PageBoard config={boardConfig} />;
}
