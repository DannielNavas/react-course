import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Layaut from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";

function MyOder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if (index === 'last') index = context.order.length - 1;
  return (
    <Layaut>
      <div className="flex justify-between w-80 mb-6">
        <Link to="/myoders">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>MyOrders</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order[index]?.products.map((product, index) => (
          <OrderCard
            key={index}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </Layaut>
  );
}

export default MyOder;
