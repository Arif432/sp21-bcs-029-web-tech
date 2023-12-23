import { lazy } from 'react';

const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));

const coreRoutes = [
 
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;
