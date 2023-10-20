import Layaut from "../../Components/Layout";
import OrdersCard from "../../Components/OdersCard";


import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
function MyOders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layaut>
      <div className="flex justify-center w-80 mb-4">

          <h1 className="font-medium text-xl" >MyOrders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/myoders/${index}`}>
          <OrdersCard totalPrice={order.total} totalProducts={order.totalProducts} />
        </Link>
      ))}
    </Layaut>
  );
}

export default MyOders;
