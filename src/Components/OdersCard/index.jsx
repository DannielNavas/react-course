import { ChevronRightIcon } from "@heroicons/react/24/solid";
/* eslint-disable react/prop-types */
const OrdersCard = props => {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-3 border border-slate-800 w-80 p-4 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.2023</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center space-x-4">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
}

export default OrdersCard;
