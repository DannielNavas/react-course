import { useContext } from "react";
import Layaut from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";

function MyOders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layaut>
      <h1>My Orders</h1>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0]?.products.map((product, index) => (
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

export default MyOders;
