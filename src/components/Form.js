import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        Name:
        <input
          name="name"
          value={values.name}
          onChange={onChange}
          type="text"
          placeholder="Name"
        />
      </label>
      <label htmlFor="size">
        Size:
        <select name="size">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Extra Large</option>
        </select>
      </label>
      <label>
        Toppings: Pepperoni
        <input
          name="pepperoni"
          type="checkbox"
          checked={values.pepperoni}
          onchange={onChange}
        />
        Sausage
        <input
          name="sausage"
          type="checkbox"
          value={values.sausage}
          onchange={onChange}
        />
        Mushrooms
        <input
          name="mushrooms"
          type="checkbox"
          value={values.mushrooms}
          onchange={onChange}
        />
        Pineapple
        <input
          name="pineapple"
          type="checkbox"
          value={values.pineapple}
          onchange={onChange}
        />
      </label>
      <label>
        Special Instructions:
        <input
          type="text"
          name="instructions"
          placeholder="Instructions"
          value={values.instructions}
          onchange={onChange}
        />
      </label>
      <button>Add to order</button>
    </form>
  );
}
