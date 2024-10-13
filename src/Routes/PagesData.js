import React, { lazy } from "react";

// Lazy-loaded components
const Home = lazy(() => import("../Pages/home/HomePage"));
const AboutUs = lazy(() => import("../Pages/aboutUs/AboutUs"));
const ContactUs = lazy(() => import("../Pages/contactUs/ContactUs"));
const SDAForm = lazy(() => import("../Pages/sda-form/SdaForm"));
const NotFound = lazy(() => import("../Pages/notFound/NotFound"));

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "sda-form",
    element: <SDAForm />,
    title: "sdaform",
  },
  {
    path: "about",
    element: <AboutUs />,
    title: "about",
  },
  {
    path: "contact",
    element: <ContactUs />,
    title: "contactus",
  },
  {
    path: "*", // This will match any path not defined above
    element: <NotFound />,
    title: "notfound",
  },
];

export default pagesData;
