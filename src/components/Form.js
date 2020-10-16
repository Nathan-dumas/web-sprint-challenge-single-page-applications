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
      <div>{errors.name}</div>
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
          value={values.pepperoni}
          onChange={onChange}
        />
        Sausage
        <input
          name="sausage"
          type="checkbox"
          value={values.sausage}
          onChange={onChange}
        />
        Mushrooms
        <input
          name="mushrooms"
          type="checkbox"
          value={values.mushrooms}
          onChange={onChange}
        />
        Pineapple
        <input
          name="pineapple"
          type="checkbox"
          value={values.pineapple}
          onChange={onChange}
        />
      </label>
      <label htmlFor="instructions">
        Special Instructions:
        <input
          name="instructions"
          value={values.instructions}
          onChange={onChange}
          type="text"
          placeholder="instructions"
        />
      </label>
      <button type="submit" disabled={disabled}>
        Add to order
      </button>
    </form>
  );
}
