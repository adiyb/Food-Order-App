import classes from "../Css/Food.module.css";

import { useRef } from "react";

export default function Food(props) {
  let amount = useRef("");

  function addHandler() {
    if (+amount.current.value > 0) {
      props.handler(props.name, amount.current.value, props.price);
      amount.current.value = 0;
    }
  }
  return (
    <div className={classes.food}>
      <div className={classes.fooddetail}>
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <p className={classes.price}>${props.price}</p>
      </div>
      <div className={classes.addamount}>
        <label htmlFor="amount">Amount</label>
        <input min={0} ref={amount} type="number" id="amount" placeholder="0" />
        <button onClick={addHandler}>+ Add</button>
      </div>
    </div>
  );
}
