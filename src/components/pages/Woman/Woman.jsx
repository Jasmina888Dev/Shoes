import React from "react";
import ProductUi from "../ui/ProductUi";
import { useSelector } from "react-redux";

const Woman = () => {
  const { product } = useSelector((s) => s);

  return (
    <div id="woman">
      <div className="container">
        <div className="woman">
          {product
            .filter((el) => el.category === "woman")
            .map((el, idx) => (
              <ProductUi el={el} key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Woman;
