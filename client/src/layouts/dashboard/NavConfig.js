// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon('eva:pie-chart-2-fill'),
  },

  {
    title: 'autorec',
    path: '/dashboard/autorec',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'sentimentanalysis',
    path: '/dashboard/sentimentanalysis',
    icon: getIcon('eva:file-text-fill'),
  },
];

export default navConfig;
