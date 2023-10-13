import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../../utils";

import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const handlerDeleteProduct = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (item) => item.id !== id
    );
    context.setCartProducts(filteredProducts);
  }
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
      <div className="overflow-y-scroll">
        {context.cartProducts?.map((product, index) => (
          <OrderCard
            key={index}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
            onDelete={handlerDeleteProduct}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl"> ${totalPrice(context.cartProducts)}</span>
          </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
