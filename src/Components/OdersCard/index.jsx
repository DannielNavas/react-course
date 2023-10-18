/* eslint-disable react/prop-types */
const OrdersCard = props => {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-3 border border-slate-800">
      <p>
        <span>01.02.2023</span>
        <span>{totalPrice}</span>
        <span>{ totalProducts }</span>
      </p>
    </div>
  )
}

export default OrdersCard;
