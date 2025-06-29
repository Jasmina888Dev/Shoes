import React from "react";
import logos from "../../../assets/images/logos.svg";
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate()
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logos} alt="img" />
          <div className="header--nav">
            <h2 onClick={() => nav("/")}>HOME</h2>
            <h2 onClick={() => nav("/man")}>MAN</h2>
            <h2 onClick={() => nav("/woman")}>WOMAN</h2>
            <h2 onClick={() => nav("/kids")}>KIDS</h2>
            <h2 onClick={() => nav("/sale")}>SALE</h2>
          </div>
          <div className="header--icons">
            <a>
              <IoSearch />
            </a>
            <a onClick={() => nav("/basket")}>
              <SlBasket />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
