import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";

const Navbar = () => {
  const { getTotalCartItems, shopCart } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} weight="fill" />({shopCart})
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
