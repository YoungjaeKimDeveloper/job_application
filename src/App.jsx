import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>About Page</h1>
      </div>
    ),
  },
]);

import React from "react";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
