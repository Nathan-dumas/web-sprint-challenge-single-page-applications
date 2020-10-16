import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('Name is required'),
    instructions: yup.string(),

    pepperoni: yup.boolean().oneOf([true, false], ''),
    sausage: yup.boolean().oneOf([true, false], ''),
    mushrooms: yup.boolean().oneOf([true, false], ''),
    pineapple: yup.boolean().oneOf([true, false], ''),
})