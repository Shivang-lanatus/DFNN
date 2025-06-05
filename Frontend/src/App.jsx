import { createBrowserRouter } from 'react-router-dom';
import { HomeScreen } from './components/HomeScreen';
import { LaunchEvents } from './components/LaunchEvents';
import { EventDetails } from './components/EventDetails';
import {Layout} from './routes/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index:true, element: <HomeScreen /> },
      { path: 'events/:id', element: <LaunchEvents /> },
      { path: 'details/:eventName', element: <EventDetails /> },
    ],
  },
])

export default router;
