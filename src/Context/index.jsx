/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  // PrdocutDetail show product detail
  const [productShow, setProductShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const[isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);



  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productShow,
        setProductShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
