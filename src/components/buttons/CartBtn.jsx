import React from "react";
import { NavLink } from "react-router-dom";
const CartBtn = () => {
  return (
    <>
      <NavLink to="/cart">
        <button className="btn btn-outline-primary ms-2">
          
          <span className="fa fa-shopping-cart me-1"></span> Cart (0)
        </button>
      </NavLink>
    </>
  );
};

export default CartBtn;


// <NavLink to="/cart" className="btn btn-outline-primary ms-2">
//               <span className="fa fa-shopping-cart me-1"></span> Cart ()

// </NavLink>
