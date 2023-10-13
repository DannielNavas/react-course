
export const totalPrice = (items) => {
  return items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
}
