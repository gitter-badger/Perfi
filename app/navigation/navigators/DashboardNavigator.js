import { StackNavigator } from 'react-navigation';
import { Dashboard, TransactionEditor } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';
import CategoriesRoutes from '../routes/CategoriesRoutes';

const DashboardNavigator = StackNavigator({
  [screens.Dashboard]: {
    screen: Dashboard,
  },
  [screens.TransactionEditor]: {
    screen: TransactionEditor,
  },
  ...CategoriesRoutes,
}, {
  ...navOptions({
    title: 'Dashboard',
    icon: 'chart-arc',
  }),
});

export default DashboardNavigator;
