import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

import NotFound from './pages/Page404';
import Products from './pages/Products';
import Blog from './pages/Blog';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/dashboard" />,
    },
    {
      path: '/dashboard/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <DashboardApp /> },
        { path: 'autorec', element: <Products /> },
        { path: 'sentimentanalysis', element: <Blog /> },
        { path: '*', element: <NotFound /> },
      ],
    },

    { path: '*', element: <NotFound /> },
  ]);
}
