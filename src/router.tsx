import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { homeUrl, rootUrl } from './common/routeUrls';

const router = createBrowserRouter([
  {
    path: rootUrl,
    element: <Layout />,
    errorElement: 'Error',
    children: [
      {
        path: homeUrl,
        element: 'Home',
      },
    ],
  },
]);

export default router;
