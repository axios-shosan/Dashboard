import { useEffect } from 'react';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import Notification from './components/Notification';
import { useNotification } from './hooks';
import { useGetUserDataMutation } from './app/backend';

// ----------------------------------------------------------------------

export default function App() {
  const [GetUserData] = useGetUserDataMutation();
  const { Notify } = useNotification();

  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
      <Notification />
    </ThemeProvider>
  );
}
