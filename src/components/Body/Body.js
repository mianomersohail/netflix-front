import Login from '../Login/Login'
import Browser from '../Browse/Browse';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function Body() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}
