import React from "react";
import ProductUi from "../ui/ProductUi";
import { useSelector } from "react-redux";

const Man = () => {
  const { product } = useSelector((s) => s);
 console.log(product, "p");
 
  return (
    <div id="man">
      <div className="container">
        <div className="man">
          {product
            .filter((el) => el.category === "man")
            .map((el, idx) => (
              <ProductUi el={el} key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Man;
