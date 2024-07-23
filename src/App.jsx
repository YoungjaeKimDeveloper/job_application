import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./assets/pages/HomeLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home</h1>
      </div>
    ),
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
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
