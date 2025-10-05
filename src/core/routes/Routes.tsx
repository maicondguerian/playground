import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../../pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export const RouterPages = () => {
  return <RouterProvider router={routes} />;
};
