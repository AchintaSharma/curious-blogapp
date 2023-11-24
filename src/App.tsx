import { useLocation, useRoutes } from "react-router-dom";

import SignIn from "./scenes/auth/SignIn.tsx";
import SignUp from "./scenes/auth/SignUp.tsx";
import Footer from "./components/common/Footer.tsx";
import Nav from "./components/common/Nav.tsx";
// import MainCard from "./components/common/cards/MainCard.tsx";
// import NewsLetter from "./components/common/cards/NewsLetter.tsx";
// import SmallCard from "./components/common/cards/SmallCard.tsx";
import CreateBlog from "./scenes/createBlog/CreateBlog.tsx";
import PostPage from "./scenes/postPage/PostPage.tsx";

import Home from "./scenes/Home/Home.tsx";
import Categories from "./scenes/categories/Categories.tsx";
import Dashboard from "./scenes/admin/components/Dashboard.tsx";

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
      path: "/post",
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
      path:"/dashboard",
      element: <Dashboard />
    },
  ]);

  if (location.pathname === "/signup" || location.pathname === "/login") {
    return routes;
  }
  return <div className="w-screen">
    <Nav />
    {routes}
    <Footer />
    </div>;
};

export default App;

// const App = () => {
//   return (
//     <>
//       <Nav />
//       <SignUp />
//       <SignIn /> 
//       <CreateBlog />
//       <MainCard />
//       <SmallCard />
//       <NewsLetter />
//       <PostPage />
//       <Footer />
//     </>
//   );
// };

// export default App;
