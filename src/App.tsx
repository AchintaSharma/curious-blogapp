import { useLocation, useRoutes } from "react-router-dom";

import Home from "./scenes/Home/Home.tsx";

const App = () => {
  const location = useLocation();

  const routes = useRoutes([
    {
      path: "/signup",
      // element: <Signup />,
    },
    {
      path: "/login",
      // element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  if (location.pathname === "/signup" || location.pathname === "/login") {
    return routes;
  }
  return <div className="w-screen">{routes}</div>;
};

export default App;
