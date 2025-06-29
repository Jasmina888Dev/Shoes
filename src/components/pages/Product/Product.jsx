import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductUi from "../ui/ProductUi";

const Product = () => {
  const product = useSelector((state) => state.product);
  const [sortOrder, setSortOrder] = useState("cheap");

  const sortedProduct = [...product].sort((a, b) => {
    if (sortOrder === "cheap") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div id="product">
      <div className="container">
        <div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="expensive">expensive</option>
            <option value="cheap">cheap</option>
          </select>
        </div>

        <div className="product">
          {sortedProduct.map((el, idx) => {
            return <ProductUi el={el} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
