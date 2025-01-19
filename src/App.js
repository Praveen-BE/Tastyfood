import React from "react";

import Body from "./components/Body";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MenuListPage from "./components/MenuListPage";
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

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/menu/:id",
            element: <MenuListPage />,
          },
          {
            path: "/cart",
            element: <CartPage />,
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
