import Card from "../../Components/Card";
import Layaut from "../../Components/Layout";

import { useEffect, useState } from "react";

export const apiUrl = "https://api.escuelajs.co/api/v1";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }
    , []
  );
  return (
    <Layaut>
      <h1>Home</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items && items.map((item) => <Card key={item.id} {...item} />)}
      </div>
      {/* <Card /> */}
    </Layaut>
  );
}

export default Home;
