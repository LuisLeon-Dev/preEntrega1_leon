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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      {items.id ? <ItemDetail item={items} /> : null}
    </div>
  );
};

export default ItemDetailContainerPage;
