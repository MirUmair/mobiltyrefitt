import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { store } from "./app/store";
import "./styles/index.css";

import App from "./App";
import Areas from "./components/Locations/Areas"
import Area from "./components/Locations/MobileAreas"


import MobileTyreFitting from "./components/Services/MobileTyreFitting";
import Contact from "./components/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [



      { path: "mobile-tyre-fitting", element: <MobileTyreFitting /> },
      { path: "contact", element: <Contact /> },
      { path: "allareas", element: <Areas /> },
      { path: "areas", element: <Area /> },




      // Redirect all unknown routes to home
      { path: "*", element: <Navigate to="/" replace /> },
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
