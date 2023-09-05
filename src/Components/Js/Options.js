import BaseCard from "./BaseCard";
import classes from "../Css/Options.module.css";

function Options(props) {
  return (
    <BaseCard green={true} className={classes.options}>
      <div>
        <button type="button" onClick={props.Handler.bind(this, "kebabs")}>
          Kebab
        </button>
        <button type="button" onClick={props.Handler.bind(this, "seafood")}>
          Sea Food
        </button>
      </div>
      <div>
        <button type="button" onClick={props.Handler.bind(this, "sushis")}>
          Sushi
        </button>
        <button type="button" onClick={props.Handler.bind(this, "pizzas")}>
          Pizza
        </button>
      </div>
    </BaseCard>
  );
}

export default Options;
