import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routesConfig/routesConfig';
import HomeIcon from 'shared/assets/icons/house.svg';
import AboutIcon from 'shared/assets/icons/info.svg';
import UserIcon from 'shared/assets/icons/circle-user.svg';
import ArticleIcon from 'shared/assets/icons/article_regular.svg';
import { SidebarItemType } from '../../model/types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: UserIcon,
          text: 'profile_nav_page',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'article_nav_page',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
