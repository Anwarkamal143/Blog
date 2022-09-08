import { UserTypes } from '@utils/enums';
import dayjs from 'dayjs';
import { ReactNode } from 'react';

export type INavItem = {
  name: string;
  route?: string;
  icon?: ReactNode;
  exact?: boolean;
  isLink?: boolean;

  meta: {
    roles?: UserTypes[];
    hasNotifications?: boolean;
    divider?: boolean;
    hasChilds: boolean;
    name?: string;
    route?: string;
    rightIcon?: ReactNode;
    routes?: INavItem[];
    className?: string;
    [key: string]: any;
  };
};
const routePrefix = '/category';
export const HeaderBottomRoutes: INavItem[] = [
  {
    name: '',
    icon: null,
    route: `/`,
    exact: true,
    isLink: false,
    meta: {
      hasChilds: false,
      className: 'home_icon',
    },
  },
  {
    name: 'APPS/SOFTWARE',
    icon: null,
    route: `${routePrefix}/apps-softwares`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'BUSINESS',
    icon: null,
    exact: true,
    isLink: true,
    route: `${routePrefix}/business`,
    meta: {
      divider: false,
      hasChilds: false,
    },
  },
  {
    name: 'EDUCATION',
    icon: null,
    route: `${routePrefix}/education`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'FOOD',
    icon: null,
    route: `${routePrefix}/food`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'HEALTH/FITNESS',
    icon: null,
    isLink: true,
    route: `${routePrefix}/health-fitness`,
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'NEWS',
    icon: null,
    isLink: true,
    route: `${routePrefix}/news`,
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'PRODUCTS/GADGETS',
    icon: null,
    route: `${routePrefix}/products-gadgets`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'REAL ESTATE',
    icon: null,
    route: `${routePrefix}/real-estate`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'SCIENCE/TECH',
    icon: null,
    route: `${routePrefix}/science-tech`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'WRITE FOR US',
    icon: null,
    route: `${routePrefix}/write-for-us`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
];
export const HeaderMiddleRoutes: INavItem[] = [
  {
    name: `${dayjs().format('dddd')}, ${dayjs().format('MMMM DD,YYYY')}`,
    icon: null,
    route: ``,
    exact: true,
    isLink: false,
    meta: {
      hasChilds: false,
      className: 'calender_icon',
    },
  },
  {
    name: 'ANIMAL',
    icon: null,
    route: `${routePrefix}/animal`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'AUTOMOBILE',
    icon: null,
    exact: true,
    isLink: true,
    route: `${routePrefix}/automobile`,
    meta: {
      divider: false,
      hasChilds: false,
    },
  },
  {
    name: 'ENTERTAINMENT',
    icon: null,
    route: `${routePrefix}/entertainment`,
    isLink: true,
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'FASHION / LIFESTYLE',
    icon: null,
    route: `${routePrefix}/fashion-lifestyle`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'HOME DECOR',
    icon: null,
    route: `${routePrefix}/home-decor`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'SPORTS / GAMES',
    icon: null,
    route: `${routePrefix}/sports-games`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'TRAVEL / TOURS',
    icon: null,
    route: `${routePrefix}/travel-tours`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'WEDDING / FUNCTIONS',
    icon: null,
    route: `${routePrefix}/weedings-functions`,
    exact: true,
    isLink: true,
    meta: {
      hasChilds: false,
    },
  },
];

export const ADMINROUTES: INavItem[] = [
  {
    name: 'Main',
    icon: null,

    meta: {
      divider: true,
      hasChilds: false,
    },
  },
  {
    name: 'Dashboard',
    icon: null,
    route: '/',
    exact: true,
    meta: {
      hasChilds: false,
      roles: [UserTypes.admin],
    },
  },
  {
    name: 'Performance',
    icon: null,
    route: '/performance',
    exact: true,
    meta: {
      hasChilds: false,
      roles: [UserTypes.admin],
    },
  },
  {
    name: 'Content',
    icon: null,
    meta: {
      divider: true,
      hasChilds: false,
    },
  },
  {
    name: 'Notifications',
    icon: null,
    route: '/notifications',
    exact: true,
    meta: {
      hasChilds: false,
      hasNotifications: true,
    },
  },
  {
    name: 'Recipies',
    icon: null,
    route: '/recipies',
    exact: false,
    meta: {
      hasChilds: true,
      routes: [
        {
          name: 'View Recipes',
          route: '/recipies/view-recipes',
          exact: true,
          icon: null,
          // icon: null
          meta: {
            hasChilds: false,
          },
        },
        {
          name: 'Add New Recipe',
          route: '/recipies/add-recipe',
          exact: true,
          // icon: null
          meta: {
            hasChilds: false,
            righticon: null,
          },
        },
      ],
    },
  },
  {
    name: 'Collections',
    icon: null,
    route: '/collections',
    exact: false,
    meta: {
      hasChilds: true,
      routes: [
        {
          name: 'View Collection',
          route: '/collections',
          icon: null,
          exact: true,
          // icon: null
          meta: {
            hasChilds: false,
          },
        },
        {
          name: 'Add New',
          route: '/collections/add-collection',
          exact: true,
          // icon: null
          meta: {
            hasChilds: false,
            righticon: null,
          },
        },
      ],
    },
  },
  {
    name: 'Followers',
    icon: null,
    route: '/followers',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Orders',
    icon: null,
    route: '/orders',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Customizations',
    icon: null,
    meta: {
      divider: true,
      hasChilds: false,
    },
  },
  {
    name: 'Public Profile',
    icon: null,
    route: '/public-profile',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Connections',
    icon: null,
    route: '/connections',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Settings',
    icon: null,
    route: '/settings',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Logout',
    icon: null,
    route: '/logout',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
];
export const PERSONALROUTES: INavItem[] = [
  {
    name: 'Personal dashboard',
    icon: null,
    meta: {
      divider: true,
      hasChilds: false,
    },
  },
  {
    name: 'My Food Feed',
    icon: null,
    route: '/',
    exact: true,
    meta: {
      hasChilds: false,
      roles: [UserTypes.cook],
    },
  },

  {
    name: 'My Content',
    icon: null,
    meta: {
      divider: true,
      hasChilds: false,
    },
  },

  {
    name: 'Favorite recipes',
    icon: null,
    route: '/favorite-recipies',
    exact: false,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Favorite cooks',
    icon: null,
    route: '/favorite-cooks',
    exact: false,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Shopping lists',
    icon: null,
    route: '/shoppint-list',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },

  {
    name: 'Customizations',
    icon: null,
    meta: {
      divider: true,
      hasChilds: false,
    },
  },
  {
    name: 'Notifications',
    icon: null,
    route: '/notifications',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Preferences ',
    icon: null,
    route: '/preferences',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Settings',
    icon: null,
    route: '/settings',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: 'Logout',
    icon: null,
    route: '/logout',
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
];
