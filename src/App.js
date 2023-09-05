import { Fragment } from "react";
import { useState, useContext } from "react";
import classes from "./App.module.css";
import store from "./Context/MainStore";

// Components
import Header from "./Components/Js/Header";
import BaseCard from "./Components/Js/BaseCard";
import Food from "./Components/Js/Food";
import Footer from "./Components/Js/Footer";
import Cart from "./Components/Js/Cart";
import Options from "./Components/Js/Options";

function App() {
  let [cartIsVisible, setCartIsVisible] = useState(false);
  let [cartLength, setCartLength] = useState(0);
  let [foodDetails, setFoodDetails] = useState({});
  const ctx = useContext(store);

  let [foods, setFoods] = useState([]);
  let foodsList = foods.map((food) => {
    return (
      <Food
        handler={addHandler}
        name={food.name}
        desc={food.desc}
        price={food.price}
        key={food.name + food.desc}
      ></Food>
    );
  });
  function cartVisibilityHandler() {
    setCartIsVisible(!cartIsVisible);
  }
  function addHandler(name, amount, price) {
    setFoodDetails({ name, amount, price });
  }

  function cartLengthHandler(cartItemsLength) {
    setCartLength(cartItemsLength);
  }
  function menuChanger(menu) {
    setFoods(ctx[menu]);
  }

  return (
    <Fragment>
      <Header cartLength={cartLength} handler={cartVisibilityHandler}></Header>
      <div className={classes.hero}></div>
      <div className={classes.main}>
        <BaseCard green={true}>
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your meal from our broad selection of available meals and
            enjoy a delicious lunch or dinner at home.
            <br />
            All our meals are cooked with high-quality ingresients, just-in-time
            and of course cooked by experienced chefs!
          </p>
        </BaseCard>
        <Options Handler={menuChanger} />
        <BaseCard>
          {foodsList.length ? (
            foodsList
          ) : (
            <h2 className={classes["initial-menu"]}>Please Choose Your Menu</h2>
          )}
        </BaseCard>
      </div>
      <Footer></Footer>
      <Cart
        cartLengthHandler={cartLengthHandler}
        foodDetails={foodDetails}
        cartIsVisible={cartIsVisible}
        handler={cartVisibilityHandler}
      ></Cart>
    </Fragment>
  );
}

export default App;
