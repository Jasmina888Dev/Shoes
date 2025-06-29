import React from "react";
import ProductUi from "../ui/ProductUi";
import { useSelector } from "react-redux";

const Kids = () => {
  const { product } = useSelector((s) => s);

  return (
    <div id="kids">
      <div className="container">
        <div className="kids">
          {product
            .filter((el) => el.category === "kids")
            .map((el, idx) => (
              <ProductUi el={el} key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Kids;
