import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import History from "./pages/History/History";
import Coupons from "./pages/Coupons/Coupons";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // path: "shop",
        element: (
          <Suspense fallback={<div>...Loading</div>}>
            <Shop />
          </Suspense>
        ),
        // children: [{ path: ":id", element: <div> Product list </div> }],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/coupons",
        element: <Coupons />,
      },
    ],
  },
]);

export default router;
