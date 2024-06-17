import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));

const approute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/home", element: <Home /> },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/project",
    element: <Projects />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={approute}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
