import React from "react";
import styles from './CartButton.module.css';
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartButton = () => {
  
  const dispatch = useDispatch();

  const toggleCartHandler = e => {
    dispatch(uiActions.toggle());
  };

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
