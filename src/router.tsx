import { createBrowserRouter } from 'react-router-dom';
import { homeUrl, rootUrl } from './common/routeUrls';
import OutletLayout from './components/OutletLayout';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: rootUrl,
    element: <OutletLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: homeUrl,
        element: 'Home',
      },
    ],
  },
]);

export default router;
