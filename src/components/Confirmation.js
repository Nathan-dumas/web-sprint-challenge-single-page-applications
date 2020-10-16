import React from "react";
export default function Confirmation({ details }) {
  return (
    <div>
      <h2>Name: {details.name}</h2>
      <p>toppings: {details.toppings}</p>
    </div>
  );
}
