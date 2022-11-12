import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Shop from './components/Shop';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "shop",
        element: <Shop />
      }
    ]
  }
])

root.render(<RouterProvider router = {router} />);