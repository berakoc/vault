import { createBrowserRouter } from 'react-router-dom';
import { dashboardUrl } from './common/routeUrls';
import OutletLayout from './components/OutletLayout';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    element: <OutletLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: dashboardUrl,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
