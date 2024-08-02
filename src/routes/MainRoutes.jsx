import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Header from "../pages/header";
import Training from "../pages/training";
import Footer from "../components/home/footer/footer";
import Form from "../components/home/form";
import Career from "../pages/career";
import Blog from "../pages/blog";
import IndividualBlog from "../pages/individual-blog";
import Uiux from "../pages/uiux";

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Form />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
          <Form />
          <Footer />
        </>
      ),
    },

    {
      path: "/training",
      element: (
        <>
          <Header />
          <Training />
          <Form />
          <Footer />
        </>
      ),
    },

    {
      path: "/career",
      element: (
        <>
          <Header />
          <Career />
          <Form />
          <Footer />
        </>
      ),
    },

    {
      path: "/blog",
      element: (
        <>
          <Header />
          <Blog />
          <Form />
          <Footer />
        </>
      ),
    },
    {
      path: "/blogs/:id",
      element: (
        <>
          <Header />
          <IndividualBlog />
          <Form />
          <Footer />
        </>
      ),
    },

    {
      path: "/uiux",
      element: (
        <>
          <Header />
          <Uiux />
          <Form />
          <Footer />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
export default MainRoutes;
