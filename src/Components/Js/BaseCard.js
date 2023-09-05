import classes from "../Css/BaseCard.module.css";

export default function BaseCard(props) {
  return (
    <div
      className={`${props.className} ${classes.basecard}  ${
        props.green ? classes.green : ""
      } `}
    >
      {props.children}
    </div>
  );
}
