import { dataService } from '@/app/config/client/dataService';
import { Event } from '@/app/config/schema/event';
import { CalendarEventsResolverFn } from '@headless-adminapp/app/calendar/types';
import { Condition } from '@headless-adminapp/core/transport';

export const calendarEventsResolver: CalendarEventsResolverFn = async (
  options
) => {
  const conditions: Condition<string>[] = [
    {
      field: 'end',
      operator: 'on-or-after',
      value: options.start.toISOString(),
    },
    {
      field: 'start',
      operator: 'on-or-before',
      value: options.end.toISOString(),
    },
  ];

  const result = await dataService.retriveRecords<Event>({
    logicalName: 'events',
    filter: {
      type: 'and',
      conditions,
    },
    sort: [],
    columns: ['_id', 'title', 'start', 'end', 'allDay'],
    limit: 5000,
  });

  return result.records.map((record) => ({
    id: record._id,
    title: record.title ?? '',
    start: record.start ? new Date(record.start) : null,
    end: record.end ? new Date(record.end) : null,
    description: record.description,
    allDay: record.allDay ?? false,
  }));
};
