

import React from 'react';
import Select from "react-select";
import {useForm, Controller } from 'react-hook-form';
import FormGroup from 'react-bootstrap/FormGroup';
import Label from 'react-bootstrap/FormLabel';
import ReactDatePicker from "react-datepicker";

const NewProduct=(props)=>{

const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur"
  });
  
  const selectOptions = [
    { value: "student", label: "Student" },
    { value: "developer", label: "Developer" },
    { value: "manager", label: "Manager" }
  ];
  
  const registerOptions = {
    // ...
    role: { required: "Role is required" }
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  // ...
  return(
<form>
    <input
    
    {...register("firstName", { required: true })} placeholder="First name" />



<input {...register("lastName", { minLength: 2 })} placeholder="Last name" />

<select {...register("category")}>
  <option value="">Select...</option>
  <option value="A">Category A</option>
  <option value="B">Category B</option>
</select>

<input {...register("checkbox")} type="checkbox" value="A" />
<input {...register("checkbox")} type="checkbox" value="B" />
<input {...register("checkbox")} type="checkbox" value="C" />

<input {...register("radio")} type="radio" value="A" />
<input {...register("radio")} type="radio" value="B" />
<input {...register("radio")} type="radio" value="C" />

<input type="submit" />
</form>)

}


export default NewProduct;