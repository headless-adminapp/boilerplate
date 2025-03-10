import { defineCalendarConfig } from '@headless-adminapp/app/calendar/utils';
import { deleteEvent } from './deleteEvent';
import { calendarEventSave } from './calendarEventSave';
import { calendarEventsResolver } from './calendarEventsResolver';

export const calendarConfig = defineCalendarConfig({
  eventsResolver: calendarEventsResolver,
  saveEvent: calendarEventSave,
  deleteEvent: deleteEvent,
  defaultFilter: {
    view: 'all',
  },
  title: 'Events',
  description: 'Manage your events',
  eventLabel: 'Event',
});
