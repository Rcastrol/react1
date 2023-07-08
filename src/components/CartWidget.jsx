
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext";

const CartWidget = () => {
  const [qty, setQty] = useState(0);
  const { count } = useContext(CartContext);
  useEffect(() => {
    setQty(count.products.reduce((total, product) => total + product.qty, 0));
  }, [count]);

  return (
    <div>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{qty}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
