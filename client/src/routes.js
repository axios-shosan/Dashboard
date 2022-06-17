import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

import NotFound from './pages/Page404';
import SentimentAnalysis from './pages/SentimentAnalysis';
import AutoRec from './pages/AutoRec';
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
        { path: 'autorec', element: <AutoRec /> },
        { path: 'sentimentanalysis', element: <SentimentAnalysis /> },
        { path: '*', element: <NotFound /> },
      ],
    },

    { path: '*', element: <NotFound /> },
  ]);
}
