import { createContext } from "react";

const store = createContext({
  sushis: [
    { name: "Sushi", desc: "Finest fish and veggies", price: "22.99" },
    { name: "Schnitzel", desc: "A german specialty!", price: "16.50" },
    { name: "Barbecue burger", desc: "American, raw, meaty", price: "12.99" },
    { name: "Green bowl", desc: "Healthy...and green...", price: "18.99" },
  ],
  kebabs: [
    { name: "Dande Kebab", desc: "Finest fish and veggies", price: "22.99" },
    { name: "Koobide", desc: "A german specialty!", price: "16.50" },
    { name: "Jooje", desc: "American, raw, meaty", price: "12.99" },
    { name: "Bakhtiari", desc: "Healthy...and green...", price: "18.99" },
  ],
  seafood: [
    { name: "Salmon", desc: "Finest fish and veggies", price: "22.99" },
    { name: "Shrimp", desc: "A german specialty!", price: "16.50" },
    { name: "Prawn", desc: "American, raw, meaty", price: "12.99" },
    { name: "Fish N Chips", desc: "Healthy...and green...", price: "18.99" },
  ],
  pizzas: [
    { name: "Special", desc: "Finest fish and veggies", price: "22.99" },
    { name: "Pepperoni", desc: "A german specialty!", price: "16.50" },
    { name: "Greek", desc: "American, raw, meaty", price: "12.99" },
    { name: "Mozzarella", desc: "Healthy...and green...", price: "18.99" },
  ],
});

export default store;
