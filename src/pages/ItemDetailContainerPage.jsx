import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemDetail from "../components/ItemDetail";

const ItemDetailContainerPage = () => {
  const [items, setItem] = useState([]);

  let { id } = useParams();

  console.log(items);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((json) =>
      setItem(json.data)
    );
  }, [id]);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Item Detail</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {items.id ? <ItemDetail item={items} /> : null}
      </div>
    </div>
  );
};

export default ItemDetailContainerPage;
