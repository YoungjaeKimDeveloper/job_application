import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from "./assets/pages/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/DashboardLayout",
    element: <DashboardLayout />,
  },
  {
    path: "/Landing",
    element: <Landing />,
  },
]);

import React from "react";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
