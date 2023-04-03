import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Error from './Error';
import Home from '@/pages/home';
import About from '@/pages/about';
import Record from '@/pages/record';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '/record/:id',
        element: <Record />,
      },
    ],
  },
]);

export default router;
