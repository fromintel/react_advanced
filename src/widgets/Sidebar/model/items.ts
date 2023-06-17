import React from 'react';
import HomeIcon from 'shared/assets/icons/house.svg';
import AboutIcon from 'shared/assets/icons/info.svg';
import UserIcon from 'shared/assets/icons/circle-user.svg';
import { RoutePath } from 'shared/config/routesConfig/routesConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: HomeIcon,
    text: 'main_nav_page',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'about_nav_page',
  },
  {
    path: RoutePath.profile,
    Icon: UserIcon,
    text: 'profile_nav_page',
  },
];
