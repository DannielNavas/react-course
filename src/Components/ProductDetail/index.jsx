import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

import "./style.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed bg-white right-0  border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center  p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={context.closeProductDetail}
          ></XMarkIcon>
        </div>
      </div>

      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productShow?.images[0]}
          alt={context.productShow.title}
        />
      </figure>
      <p className="flex flex-col  p-6">
        <span className="font-medium text-md">
          <strong>Product:</strong> {context.productShow.title}
        </span>
        <span className="font-medium text-2xl mb-2">
          <strong>Price:</strong> ${context.productShow.price}
        </span>
        <span className="font-light text-sm">
          <strong>Description:</strong> {context.productShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
