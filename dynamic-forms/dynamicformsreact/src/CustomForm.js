import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CustomForm = (props) => {
    const {register,errors,handleSubmit}= useForm();
    const {formData} = props;
    console.log("formData ",formData);

    const onSubmit = (d) => {
        console.log(d);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        {
            formData.map(field=>{
                switch(field.type) {
                    case "string": 
                        return( <div>
                            <label htmlFor={field.name}>{field.displayLabel}</label>                        
                            <input {...register(`${field.name}`, { required: true })} id={field.name}></input>
 
                            {errors && errors[`${field.name}`] && "First name is required"}
                        </div>)
                    case "options": 
                        return( <div>
                            <label htmlFor={field.name}>{field.displayLabel}</label>  
                            <select {...register(`${field.name}`)} >
                                {field.options.map(option => 

                                    <option>{option.name}</option>
                                )}
                                
                            </select>
                        </div>)

                }

            }

            )
        }
        <button type="submit">Submit</button>
        </form>)
    

}

export default CustomForm;