import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { TbTrashX } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import CountUp from "react-countup";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  const dispatch = useDispatch();
  
  function deleteBasket(itemBasket) {
    dispatch({ type: "DELETE_BASKET", payload: itemBasket });
    toast.info("🦄 Успешно удалено!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }


  let totalPrice = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--card">
            {basket.length ? (
              basket.map((el) => (
                <div className="basket--card__block">
                  <Zoom>
                    <img src={el.image} alt="img" width={150} />
                  </Zoom>
                  <h3>{el.name}</h3>
                  <h3
                    style={{
                      color: "red",
                    }}
                  >
                    {el.price}$
                  </h3>
                  <div className="basket--card__block--count">
                    <button onClick={() => increamentPro(el)}>+</button>
                    <h4>{el.quantity}</h4>
                    <button onClick={() => decrementPro(el)}>-</button>
                  </div>
                  <a onClick={() => deleteBasket(el.id)}>
                    <TbTrashX />
                  </a>
                </div>
              ))
            ) : (
              <center>
                <img
                  src="https://img.pikbest.com/origin/09/24/04/38YpIkbEsTJVu.png!sw800"
                  alt="emptyImg"
                  width={450}
                />
              </center>
            )}
          </div>
          <div className="basket--total">
            <h1>
              Total Price:{" "}
              <CountUp
                start={0}
                end={totalPrice}
                duration={2.55}
                separator=" "
                decimals={0}
                decimal=" "
              />
              $
            </h1>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Basket;
