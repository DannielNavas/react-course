import { BrowserRouter, useRoutes } from "react-router-dom";
import "../../App.css";

import Home from "../Home";
import MyAcount from "../MyAccounts";
import MyOders from "../MyOrders";
import NotFound from "../NotFound";
import Singin from "../Singin";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/myacount",
      element: <MyAcount />,
    },
    {
      path: "/myoders",
      element: <MyOders />,
    },
    {
      path: "/singin",
      element: <Singin />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
