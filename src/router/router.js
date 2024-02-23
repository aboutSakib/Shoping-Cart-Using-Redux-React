import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import Root from "../pages/Root";
import Shop from "../pages/Shop";

export const ourRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", index: true, element: <Shop /> },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
