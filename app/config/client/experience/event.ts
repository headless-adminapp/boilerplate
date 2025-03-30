import { SchemaExperienceBuilder } from '@headless-adminapp/app/builders';
import { eventSchema } from '@/app/config/schema/event';
import { bundleLazyIcon } from '@headless-adminapp/icons-fluent/lazyIcon';

const EventIcon = bundleLazyIcon('Book24Regular', 'Book24Regular');

const builder = new SchemaExperienceBuilder(eventSchema);

export const eventSchemaExperience = builder.defineExperience({
  Icon: EventIcon,
  views: [
    {
      id: 'default',
      name: 'All Events',
      experience: builder.defineViewExperience({
        grid: ['title', 'start', 'end', 'allDay', 'status'],
      }),
    },
  ],
  forms: [
    {
      id: 'default',
      name: 'Default',
      experience: builder.defineFormExperience([
        'title',
        'start',
        'end',
        'allDay',
        'description',
        'status',
      ]),
    },
  ],
});
