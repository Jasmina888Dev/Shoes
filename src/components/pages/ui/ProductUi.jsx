import React from "react";
import { IoIosHeart } from "react-icons/io";
import { useDispatch } from "react-redux";

const ProductUi = ({ el }) => {
  const dispatch = useDispatch();
  function toBasket(item) {
    dispatch({ type: "ADD_BASKET", payload: item });
    alert("Успешно!");
  }
  return (
    <div className="product">
      <div className="product--card">
        {el.price > 6000 ? <h1>sale 20%</h1> : null}
        <img src={el.image} alt="img" />
        <h2>{el.name}</h2>
        <h2>#{el.category}</h2>
        <h4> {"★".repeat(el.rating)}</h4>
        <div className="product--card__price">
          <h3 style={{ color: el.price > 6000 ? "red" : "black" }}>
            {el.price > 6000 ? Math.floor(el.price - el.price * 0.2) : el.price}
            $
            <span
              style={{
                color: "black",
              }}
            >
              {el.price}$
            </span>
          </h3>
          <h6>
            <IoIosHeart />
          </h6>
          <button onClick={() => toBasket(el)}>add to basket</button>
        </div>
      </div>
    </div>
  );
};

export default ProductUi;
