import {
  NavPageSection,
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

export const navPageGroupAreas: NavPageSection[] = [
  {
    label: '',
    hideLabel: true,
    items: [
      {
        type: PageType.Custom,
        label: 'Welcome',
        link: '/welcome',
        Icon: WelcomeIcon,
      },
      {
        type: PageType.Custom,
        label: 'Dashboard',
        link: '/dashboard',
        Icon: DashboardIcon,
      },
      {
        type: PageType.Custom,
        label: 'Board',
        link: '/board',
        Icon: BoardIcon,
      },
      {
        type: PageType.Custom,
        label: 'Calendar',
        link: '/calendar',
        Icon: CalendarIcon,
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
];
