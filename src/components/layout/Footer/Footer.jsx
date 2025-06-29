import React from "react";
import shoesImg from "../../../assets/images/shoesImg.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--block1">
            <h2>CHOOSE COLOR : </h2>
            <img src={shoesImg} alt="img" />
          </div>
          <div className="footer--block2">
            <button className="btn1" onClick={() => nav("/admin")}>
              ADD TO CART
            </button>
            <button className="btn2" onClick={() => nav("/product")}>BUY NOW</button>
          </div>
          <div className="footer--block3">
            <h3>INSPIRATION</h3>
            <p>
              Inspired by the design of the latest Air Jordan game shoe, <br />{" "}
              the Jordan Jumpman 2021 helps up-and-coming players <br /> level
              up their game.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
