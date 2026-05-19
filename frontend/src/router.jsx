import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Pages/Home.jsx';
import Menu from './components/Pages/Menu.jsx';
import Event from './components/Pages/Event.jsx';
import Register from './components/Pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'events', element: <Event /> },
      { path: 'event', element: <Event /> },
      { path: 'reservation', element: <Register /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Home /> },
    ],
  },
]);

export default router;
