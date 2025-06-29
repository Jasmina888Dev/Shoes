import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");

  const { product } = useSelector((s) => s);
  const dispatch = useDispatch();

  function createProduct() {
    if (!url.trim() || !name.trim() || !price.trim()) {
      alert(404);
    } else {
      const newProduct = {
        id: Date.now(),
        image: url,
        name: name,
        price: price,
        rating: rating,
        category: category,
      };

      dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    }
    setUrl("");
    setName("");
    setPrice("");
    setCategory("");
    setRating("");
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>Admin</h1>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Product Url"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <input
            type="text"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <input
            type="number"
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="">Category</option>
            <option value="man">man</option>
            <option value="woman">women</option>
            <option value="kids">kids</option>
            <option value="sale">sale</option>
          </select>
          <button onClick={() => createProduct()}>add</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
