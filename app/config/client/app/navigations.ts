import {
  NavPageGroupArea,
  PageType,
} from '@headless-adminapp/core/experience/app';
import { bundleLazyIcon } from '@headless-adminapp/icons-fluent/lazyIcon';

const WelcomeIcon = bundleLazyIcon('EmojiHand24Regular', 'EmojiHand24Filled');
const DashboardIcon = bundleLazyIcon(
  'DataTrending24Regular',
  'DataTrending24Filled'
);
const BoardIcon = bundleLazyIcon(
  'ColumnTriple24Regular',
  'ColumnTriple24Filled'
);
const CalendarIcon = bundleLazyIcon(
  'CalendarClock24Regular',
  'CalendarClock24Filled'
);

export const navPageGroupAreas: NavPageGroupArea[] = [
  {
    label: 'Main',
    groups: [
      {
        label: '',
        hideLabel: true,
        items: [
          {
            type: PageType.Custom,
            label: 'Welcome',
            link: '/welcome',
            icon: WelcomeIcon,
          },
          {
            type: PageType.Custom,
            label: 'Dashboard',
            link: '/dashboard',
            icon: DashboardIcon,
          },
          {
            type: PageType.Custom,
            label: 'Board',
            link: '/board',
            icon: BoardIcon,
          },
          {
            type: PageType.Custom,
            label: 'Calendar',
            link: '/calendar',
            icon: CalendarIcon,
          },
        ],
      },
      {
        label: 'Data',
        items: [
          {
            type: PageType.EntityView,
            logicalName: 'events',
          },
        ],
      },
    ],
  },
];
