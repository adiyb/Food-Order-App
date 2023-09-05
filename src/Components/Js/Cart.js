import classes from "../Css/Cart.module.css";
import { useEffect, useReducer } from "react";

import BaseCard from "./BaseCard";
import CartItem from "./Cart-Item";

export default function Cart(props) {
  function totalAmountChanger(price, operation) {
    setTotalAmount({ price, operation });
  }

  let [cartItemsList, setCartItemsList] = useReducer((oldValue, action) => {
    if (action.filteredCart) {
      return action.filteredCart;
    } else {
      return [...oldValue, action];
    }
  }, []);

  function cartItemRemover(itemId) {
    let filteredCart = cartItemsList.filter((el) => {
      if (el.props) {
        if (el.props.itemId === itemId) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    });
    setCartItemsList({ filteredCart });
  }

  useEffect(() => {
    props.cartLengthHandler(cartItemsList.length - 1);
  }, [cartItemsList.length]);

  let [totalAmount, setTotalAmount] = useReducer((oldValue, action) => {
    if (action.totalItemPrice) {
      return +(oldValue + action.totalItemPrice).toFixed(2);
    } else if (action.price) {
      if (action.operation === "addition") {
        return +(oldValue + +action.price).toFixed(2);
      } else if (action.operation === "subtraction") {
        return +(oldValue - +action.price).toFixed(2);
      }
    } else {
      return 0;
    }
  }, 0);

  function totalAmountCalculator(totalItemPrice) {
    setTotalAmount({ totalItemPrice });
  }

  useEffect(() => {
    setCartItemsList(
      <CartItem
        cartItemRemover={cartItemRemover}
        handler={totalAmountCalculator}
        handler2={totalAmountChanger}
        key={props.foodDetails.name + Math.random().toFixed(2)}
        itemId={props.foodDetails.name + Math.random().toFixed(2)}
        name={props.foodDetails.name}
        price={props.foodDetails.price}
        amount={props.foodDetails.amount}
      ></CartItem>
    );
  }, [props.foodDetails]);

  return (
    <div
      className={`${classes.backdrop}  ${
        props.cartIsVisible ? classes.show : ""
      }`}
    >
      <BaseCard className={classes.cart}>
        {cartItemsList}
        <div className={classes.totalamountwrapper}>
          <h3>Total Amount</h3>
          <div className={classes.order}>
            <h3>${totalAmount === 0 ? "00.00" : totalAmount}</h3>
            <button onClick={props.handler}>Close</button>
            <button>Order</button>
          </div>
        </div>
      </BaseCard>
    </div>
  );
}
