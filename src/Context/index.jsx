/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const apiUrl = "https://api.escuelajs.co/api/v1";

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  // PrdocutDetail show product detail
  const [productShow, setProductShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const [order, setOrder] = useState([]);

  const [searchByTitle, setSearchByTitle] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);




  // products

   const [items, setItems] = useState(null);

   useEffect(() => {
     fetch(`${apiUrl}/products`)
       .then((res) => res.json())
       .then((data) => setItems(data));
   }, []);


  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) => item.title?.toLowerCase().includes(searchByTitle?.toLowerCase()));
  }

  useEffect(() => {
    if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle]);

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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
