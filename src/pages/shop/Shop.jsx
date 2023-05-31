import React from "react";
import { PRODUCTS } from "../../products.js";
import Product from "./Product.jsx";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Sew In Style</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
