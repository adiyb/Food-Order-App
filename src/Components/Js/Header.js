import classes from "../Css/Header.module.css";

export default function Header(props) {
  return (
    <header className={classes.header}>
      <h1>React Meals</h1>
      <button onClick={props.handler}>
        <span className="material-symbols-outlined">shopping_cart</span> Your
        Cart <span className={classes.amount}>{props.cartLength}</span>
      </button>
    </header>
  );
}
