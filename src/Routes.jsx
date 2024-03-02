import React from "react";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/counter/Counter";
import RootLayout from "./layout/rootlayout/RootLayout";
import AboutUs from "./pages/about-us/AboutUs";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
