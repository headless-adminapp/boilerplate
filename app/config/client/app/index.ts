import { AppExperience } from '@headless-adminapp/core/experience/app';
import { navPageGroupAreas } from './navigations';
import { iconSet } from '@headless-adminapp/icons-fluent';
import { commands } from '../commands';
import { bundleLazyIcon } from '@headless-adminapp/icons-fluent/lazyIcon';

const ProfileIcon = bundleLazyIcon('Person24Regular', 'Person24Filled');

export const appExperience: AppExperience = {
  id: 'default',
  logo: {},
  title: 'Admin App',
  navItems: navPageGroupAreas,
  accountMenuItems: [
    {
      label: 'Profile',
      icon: ProfileIcon,
      link: '/profile',
    },
  ],
  quickActionItems: [
    {
      label: 'Settings',
      icon: iconSet.Settings,
      link: '/settings',
    },
  ],
  viewCommands: commands.view,
  subgridCommands: commands.subgrid,
  formCommands: commands.form,
};
