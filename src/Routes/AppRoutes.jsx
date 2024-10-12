// src/routes/AppRoutes.js

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy-loaded components
const Home = lazy(() => import('../Pages/home/HomePage'));
const AboutUs = lazy(() => import('../Pages/aboutUs/AboutUs'));
const ContactUs = lazy(() => import('../Pages/contactUs/ContactUs'));
const SDAForm = lazy(() => import('../Pages/sda-form/SdaForm'));
const NotFound = lazy(() => import('../Pages/notFound/NotFound'));

const AppRoutes = () => {
  return (
    <Router>
      {/* Suspense allows fallback loading while components load */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Use JSX elements for rendering components */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sda-form" element={<SDAForm />} />
          {/* If no route matches, show 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
