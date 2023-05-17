import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './style/index.css';
import Root, { loader as rootLoader } from "./routes/Root/Root";
import Error404 from './components/Error404/Error404';
import House from './components/House/House';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    loader: rootLoader,
    children: [
      {
        path: "house/:houseId",
        element: <House />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);