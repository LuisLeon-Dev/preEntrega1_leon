import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";

const ItemListContainer = (props) => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((json) =>
      setItem(json.data)
    );
  }, []);

  return (
    <div>
      <h2 className="titulo">{props.greeting}</h2>
      <div className="items">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`detail/${item.id}`}>
                <CardComponent item={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
