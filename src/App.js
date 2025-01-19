import React, { lazy, Suspense } from "react";

import Body from "./components/Body";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import MenuListPage from "./components/MenuListPage";
import HomePage from "./components/HomePage.js";
// import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import CartPage from "./components/CartPage.js";
import ShimmerMenuPage from "./components/ShimmerMenuPage.js";
import ShimmerResListPage from "./components/ShimmerResListPage.js";
const MenuListPage = lazy(() => import("./components/MenuListPage"));
const CartPage = lazy(() => import("./components/CartPage.js"));

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<ShimmerResListPage />}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "/menu/:id",
            element: (
              <Suspense fallback={<ShimmerMenuPage />}>
                <MenuListPage />
              </Suspense>
            ),
          },
          {
            path: "/cart",
            element: (
              <Suspense fallback={<ShimmerMenuPage />}>
                <CartPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
      },
    }
  );
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} future={{ v7_startTransition: true }}>
        {/* <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/" element={<MenuListPage />} />
      </Routes> */}

        <Body />
      </RouterProvider>
    </Provider>
  );
};

export default App;
