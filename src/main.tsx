import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import "./styles/index.css";

import App from "./App";
import NotFound from "./pages/NotFound";
import Areas from "./components/Locations/Areas"
import Area from "./components/Locations/MobileAreas"


import MobileTyreFitting from "./components/Services/MobileTyreFitting";
import Contact from "./components/Contact";
import Checkout from "./pages/Checkout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [



      { path: "mobile-tyre-fitting", element: <MobileTyreFitting /> },
      { path: "contact", element: <Contact /> },
      { path: "checkout", element: <Checkout /> },
      { path: "allareas", element: <Areas /> },
      { path: "areas", element: <Area /> },




      // Not found
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
