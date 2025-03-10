'use client';

import { FC } from 'react';
import { tokens } from '@fluentui/react-components';

export const CustomWidget: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        background: tokens.colorNeutralBackground1,
        boxShadow: tokens.shadow2,
        borderRadius: tokens.borderRadiusMedium,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Customized widget</h1>
    </div>
  );
};
