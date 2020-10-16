import React from "react";

export default function Form(props) {
  return (
    <form>
      <label htmlFor='name'>Name:
        <input name="name" type="text" placeholder="Name" />
      </label>
      <label htmlFor='size'>
          <select name='size'>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
          </select>
      </label>
      <button>Add to order</button>
    </form>
  );
}
