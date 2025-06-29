import React from "react";
import ProductUi from "../ui/ProductUi";
import { useSelector } from "react-redux";

const Sale = () => {
  const { product } = useSelector((s) => s);
  console.log(product, "p");

  return (
    <div id="sale">
      <div className="container">
        <div className="sale">
          {product
            .filter((el) => el.price > 6000)
            .map((el, idx) => (
              <ProductUi el={el} key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
