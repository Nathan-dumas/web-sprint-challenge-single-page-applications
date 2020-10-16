import React from "react";
export default function Confirmation({ details }) {
  return (
    <div>
      <h1>Order is confirmed!</h1>
      <h2>Name: {details.name}</h2>
      <h2>Size: {details.size}</h2>
      <h2>Toppings:</h2>
      <li>Pepperoni: {details.pepperoni ? 'Yes' : 'No'}</li>
      <li>Sausage: {details.sausage ? 'Yes' : 'No'}</li>
      <li>Mushrooms: {details.mushrooms ? 'Yes' : 'No'}</li>
      <li>Pineapple: {details.pineapple ? 'Yes' : 'Of course not!'}</li>
      <p>Special Instructions: {details.instructions ? details.instructions : 'None'}</p>
    </div>
  );
}
