import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import pagesData from "./PagesData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{pageRoutes}</Routes>
    </Suspense>
  );
};

export default Router;
