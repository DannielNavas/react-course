import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu  flex-col fixed bg-white right-0  border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center  p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={context.closeCheckoutSideMenu}
          ></XMarkIcon>
        </div>
      </div>
      {context.cartProducts?.map((product, index) => (
        <OrderCard
          key={index}
          title={product.title}
          imageUrl={product.images[0]}
          price={product.price}
        />
      ))}
    </aside>
  );
};

export default CheckoutSideMenu;
