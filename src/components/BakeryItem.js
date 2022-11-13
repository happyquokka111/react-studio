// TODO: create a component that displays a single bakery item
import React from "react";

export default function BakeryItem(props) {
  const { item, addTo } = props;
  return (
    <div className="items">
      <img className="im" src={item.image} width="40%"></img>
      <h3>{item.name}</h3>
      <div>${item.price}</div>
      <div>
        <button className="button" onClick={() => addTo(item)}>
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}
