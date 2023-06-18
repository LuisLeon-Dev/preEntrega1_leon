import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import CardComponent from "../components/CardComponent";

const Category = () => {
  const [items, setItem] = useState([]);
  let { categoryId, id } = useParams();

  let filteredItems = items.filter((item) => {
    return item.category === categoryId;
  });

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((json) =>
      setItem(json.data)
    );
  }, []);

  return (
    <div>
      <div className="items">
        {filteredItems.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`../detail/${item.id}`}>
                <CardComponent item={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
