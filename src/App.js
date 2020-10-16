import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Form from "./components/Form";
import axios from 'axios'


const initialValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  instructions: "",
};

const initialErrors = {
  name: "",
};

const initialData = [];
const initialDisabled = true;

const App = () => {

  const [data, setData] = useState(initialData)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const orderPizza = newOrder => {
    axios
    .post('https://reqres.in/api/pizza')
    .then(res => setData(...data, res.data))
    .catch(err => console.log(err))
  }

  const inputChange = (name, value) => {
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      toppings: ['pepperoni', 'sausage', 'mushrooms', 'pineapple'].filter(toppings => formValues[toppings])
    }
    orderPizza(newOrder)
    setFormValues(initialValues)
  }

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
