import Layaut from "../../Components/Layout";
import OrdersCard from "../../Components/OdersCard";


import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
function MyOders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layaut>
      MyOrders
      {context.order.map((order, index) => (
        <Link key={index} to={`/myoders/${order.id}`}>
          <OrdersCard
            totalPrice={order.total}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layaut>
  );
}

export default MyOders;
