import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const items = [
    {
      name: "chocolate chip cookie",
      price: 2.99,
      id: 1,
      image: "./images/anika.png",
    },
    {
      name: "toast with butter",
      price: 4.99,
      id: 2,
      image: "./images/kelly.png",
    },
    {
      name: "matcha mille crepe cake",
      price: 3.5,
      id: 3,
      image: "./images/aubrey.png",
    },
    {
      name: "egg custard bun",
      price: 2.99,
      id: 4,
      image: "./images/connie.png",
    },
    {
      name: "steamed taro buns",
      price: 4.5,
      id: 5,
      image: "./images/dylan.png",
    },
    {
      name: "chocolate fudge brownie",
      price: 3.99,
      id: 6,
      image: "./images/isaac.png",
    },
    { name: "macarons", price: 4.99, id: 7, image: "./images/jeff.png" },
    { name: "bread", price: 4.99, id: 8, image: "./images/jenny.png" },
    { name: "croissant", price: 2.99, id: 9, image: "./images/jessie.png" },
    { name: "tiramisu", price: 3.99, id: 10, image: "./images/lauren.png" },
    { name: "egg tart", price: 2.99, id: 11, image: "./images/melissa.png" },
    { name: "bagel", price: 2.99, id: 12, image: "./images/miku.png" },
    {
      name: "gingerbread man",
      price: 2.99,
      id: 13,
      image: "./images/nick.png",
    },
    { name: "cheesecake", price: 3.99, id: 14, image: "./images/sunny.png" },
    { name: "cream puff", price: 2.99, id: 15, image: "./images/tongyu.png" },
  ];
  const [count, setCount] = useState([]);
  const totalPrice = count.reduce((a, c) => a + c.quantity * c.price, 0);
  const addTo = (item) => {
    const exist = count.find((it) => it.id === item.id);
    if (exist) {
      setCount(
        count.map((it) =>
          it.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : it
        )
      );
    } else {
      setCount([...count, { ...item, quantity: 1 }]);
    }
  };

  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {items.map((item) => (
        <BakeryItem key={item.id} item={item} addTo={addTo}></BakeryItem>
      ))}
      <h2>Cart</h2>
      <div>
        {count.length === 0 && <div> Cart is Empty</div>}

        {count.map((it) => (
          <div key={it.id}>
            <div>
              {it.quantity} x {it.name}
            </div>
          </div>
        ))}
        {count.length !== 0 && (
          <div className="col-1 text-right">
            <strong>${totalPrice}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
