import Card from "../../Components/Card";
import Layaut from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";




function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle) {

      if (context.filteredItems?.length === 0) {
        return <h1 className="font-medium text-xl">No results</h1>;
      } else {
        return (
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {context.filteredItems &&
              context.filteredItems.map((item) => <Card key={item.id} {...item} />)}
          </div>
        );
      }
    } else {
      return (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {context.items &&
            context.items.map((item) => <Card key={item.id} {...item} />)}
        </div>
      );
    }
  }

  return (
    <Layaut>
      <h1 className="font-medium text-xl">Exclusive products</h1>

      <input
        type="text"
        placeholder="Serch a product"
        className="rounded-lg mb-4 mt-4 border border-slate-800 w-80 p-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      {renderView()}
      <ProductDetail />
    </Layaut>
  );
}

export default Home;
