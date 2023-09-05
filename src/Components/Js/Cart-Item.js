import { useEffect, useState } from "react";
import classes from "../Css/Cart-Item.module.css";

export default function CartItem(props) {
  let [amount, setAmount] = useState(props.amount);
  let totalItemPrice = +(props.price * amount).toFixed(2);
  useEffect(() => {
    props.handler(totalItemPrice);
  }, []);

  function increment() {
    setAmount(++amount);
    props.handler2(props.price, "addition");
  }
  function decrement() {
    setAmount(--amount);
    props.handler2(props.price, "subtraction");
    if (amount === 0) {
      props.cartItemRemover(props.itemId);
    }
  }

  if (props.name) {
    return (
      <div className={classes.cartitem}>
        <div className={classes.left}>
          <h3>{props.name}</h3>
          <span>${amount > 0 ? totalItemPrice : "00.00"}</span>
          <span>x {amount}</span>
        </div>
        <div className={classes.right}>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    );
  }
}
