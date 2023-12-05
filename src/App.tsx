import { useLocation, useRoutes } from "react-router-dom";

import SignIn from "./scenes/auth/SignIn.tsx";
import SignUp from "./scenes/auth/SignUp.tsx";
import Footer from "./components/common/Footer.tsx";
import Nav from "./components/common/Nav.tsx";
import CreateBlog from "./scenes/createBlog/CreateBlog.tsx";
import PostPage from "./scenes/postPage/PostPage.tsx";
import Home from "./scenes/Home/Home.tsx";
import Categories from "./scenes/categories/Categories.tsx";
import Admin from "./scenes/admin/Admin.tsx";
import Overview from "./scenes/admin/components/Overview.tsx";
import Dashboard from "./scenes/admin/components/Dashboard.tsx";
import MangeBlog from "./scenes/admin/components/MangeBlog.tsx";
import ManageUsers from "./scenes/admin/components/ManageUsers.tsx";
import ManageCategories from "./scenes/admin/components/ManageCategories.tsx";
import OurStory from "./scenes/ourStory/OurStory.tsx";
import Help from "./scenes/help/Help.tsx";

const App = () => {
  const location = useLocation();

  const routes = useRoutes([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/create-blog",
      element: <CreateBlog />,
    },
    {
      // path: "/post/:id",
      path: "/post/:id",
      element: <PostPage />,
    },
    {
      // path: "/post/:id",
      path: "/categories",
      element: <Categories />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      // eslint-disable-next-line react/no-children-prop
      element: <Dashboard children={undefined} />,
    },
    {
      // path: "/admin",      
      element: <Admin />,
    },
    {
      path:"/admin/:action",
      element: <Admin />,
    },
    {
      path: "/overview",
      element: <Overview />,
    },
    {
      path: "/manage-blogs",
      element: <MangeBlog />,
    },
    {
      path: "manage-users",
      element: <ManageUsers />,
    },
    {
      path: "manage-category",
      element: <ManageCategories />,
    },
    {
      path: "ourStory",
      element: <OurStory />,
    },{
      path: "/help",
      element: <Help />
    },
  ]);

  if (location.pathname === "/signup" || location.pathname === "/login") {
    return routes;
  }
  return (
    <div className="w-screen">
      <Nav />
      {routes}
      <Footer />
    </div>
  );
};

export default App;
