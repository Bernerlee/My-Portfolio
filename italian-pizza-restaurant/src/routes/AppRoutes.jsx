import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import MenuSingle from "../pages/MenuSingle";
import Blog from "../pages/Blog";
import BlogSingle from "../pages/BlogSingle";
import Contact from "../pages/Contact";
import BookNow from "../pages/BookNow";
import PasswordProtected from "../pages/PasswordProtected";
import Licenses from "../pages/Licenses";
import Changelog from "../pages/Changelog";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<MenuSingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/password" element={<PasswordProtected />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/changelog" element={<Changelog />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
