import React from "react";
export default function Confirmation(props) {
  const { name, pepperoni, sausage, mushrooms, pineapple, instructions, size } = props;

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>{pepperoni ? 'Yes' : 'No'}</p>
      <p>{sausage}</p>
      <p>{mushrooms}</p>
      <p>{pineapple}</p>
      <p>size: {size}</p>
      <p>Instructions: {instructions}</p>
    </div>
  );
}
