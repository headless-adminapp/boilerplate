'use client';

import { useState } from 'react';
import { PageEntityView } from '@headless-adminapp/fluent/PageEntityView';
import { PageBroken } from '@headless-adminapp/fluent/components/PageBroken';

export default function Page(
  props: Readonly<{ params: { logicalName: string } }>
) {
  const [viewId, setViewId] = useState<string | undefined>(undefined);

  if (['users'].includes(props.params.logicalName)) {
    // Some schemas can be restricted to certain roles
    // Customize as needed
    return (
      <PageBroken
        title="Access Denied"
        message="You do not have permission to view this page."
      />
    );
  }

  return (
    <PageEntityView
      logicalName={props.params.logicalName}
      viewId={viewId}
      onChangeView={setViewId}
    />
  );
}
