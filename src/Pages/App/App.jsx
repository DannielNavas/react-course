import { BrowserRouter, useRoutes } from "react-router-dom";
import "../../App.css";
import { ShoppingCartProvider } from "../../Context";

import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import Navbar from "../../Components/Navbar";
import Home from "../Home";
import MyAcount from "../MyAccounts";
import MyOder from "../MyOrder";
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
      path: "/myoders/last",
      element: <MyOder />,
    },
    {
      path: "/myoders/:id",
      element: <MyOder />,
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
    <ShoppingCartProvider>
    <BrowserRouter>
        <Navbar></Navbar>
        <CheckoutSideMenu />
      <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
