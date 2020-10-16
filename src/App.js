import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Form from "./components/Form";
import axios from "axios";
import * as yup from "yup";
import schema from "./FormSchema";

const initialValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  pineapple: false,
  instructions: "",
};

const initialErrors = {
  name: "",
};

const initialData = [];
const initialDisabled = true;

const App = () => {
  const [data, setData] = useState(initialData);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const orderPizza = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then(res => {
        setData([...data, res.data])
      })
      .catch(err => console.log(err))
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      instructions: formValues.instructions.trim(),
      toppings: ["pepperoni", "sausage", "mushrooms", "pineapple"].filter(
        (toppings) => formValues[toppings]
      ),
    };
    orderPizza(newOrder);
    setFormValues(initialValues);
  };
  console.log(data)
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <Homepage />
      <Form
        values={formValues}
        submit={submitForm}
        change={inputChange}
        disabled={disabled}
        errors={formErrors}
      />
    </>
  );
};
export default App;
