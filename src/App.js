import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Router, RouterProvider, } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import About from "./Components/About";
import NotFound from "./Pages/NotFound";
import Registation from "./Pages/Registration";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Declare Root component before using it
function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      {/* Define other routes */}
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        {/* The rest of your app */}
      </div>
    </RouterProvider>
  );
}