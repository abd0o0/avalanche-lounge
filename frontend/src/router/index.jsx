import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import React from 'react';
import App from '../App';
import Home from '../components/Pages/Home';
import Menu from '../components/Pages/Menu';
import Event from '../components/Pages/Event';
import Register from '../components/Pages/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/events" element={<Event />} />
      <Route path="/reservation" element={<Register />} />
    </Route>
  )
);

export default router;
