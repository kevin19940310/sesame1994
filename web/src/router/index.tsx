import { createBrowserRouter } from 'react-router-dom';
// import Framework from './Framework';
import Error from './Error';
import Home from '@/pages/home';
import About from '@/pages/about';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Framework />,
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
    ],
  },
]);

export default router;
