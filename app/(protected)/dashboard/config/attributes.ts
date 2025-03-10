import { InferredSchemaType } from '@headless-adminapp/core/schema';
import { defineSchemaAttributes } from '@headless-adminapp/core/schema/utils';

// filter attributes available for all widgets
export const attributes = defineSchemaAttributes({
  from: {
    type: 'date',
    format: 'date',
    label: 'From',
  },
  to: {
    type: 'date',
    format: 'date',
    label: 'To',
  },
});

export type InsightsAttributes = typeof attributes;
export type InsightsData = InferredSchemaType<InsightsAttributes>;
