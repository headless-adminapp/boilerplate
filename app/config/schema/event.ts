import { InferredSchemaType } from '@headless-adminapp/core/schema';
import { defineSchema } from '@headless-adminapp/core/schema/utils';

export const eventSchema = defineSchema({
  logicalName: 'events',
  label: 'Event',
  pluralLabel: 'Events',
  idAttribute: '_id',
  primaryAttribute: 'title',
  attributes: {
    _id: {
      type: 'id',
      label: 'ID',
      readonly: true,
      objectId: true,
      required: true,
    },
    title: {
      type: 'string',
      format: 'text',
      label: 'Title',
      required: true,
    },
    createdAt: {
      type: 'date',
      format: 'datetime',
      label: 'Created At',
      readonly: true,
      systemDefined: true,
    },
    updatedAt: {
      type: 'date',
      format: 'datetime',
      label: 'Updated At',
      readonly: true,
      systemDefined: true,
    },
    start: {
      type: 'date',
      format: 'datetime',
      label: 'Scheduled Start',
    },
    end: {
      type: 'date',
      format: 'datetime',
      label: 'Scheduled End',
    },
    allDay: {
      type: 'boolean',
      label: 'All Day',
    },
    description: {
      type: 'string',
      format: 'textarea',
      label: 'Description',
    },
    status: {
      type: 'choice',
      label: 'Status',
      string: true,
      default: 'open',
      options: [
        {
          label: 'Open',
          value: 'open',
        },
        {
          label: 'In Progress',
          value: 'in_progress',
        },
        {
          label: 'Resolved',
          value: 'resolved',
        },
      ],
    },
  },
});

export type EventAttributes = typeof eventSchema.attributes;

export type Event = InferredSchemaType<EventAttributes>;
