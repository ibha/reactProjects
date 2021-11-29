

import React from 'react';

import {Input, Label, FormGroup, FormText, FormFeedback, Row, Col} from 'reactstrap';


//for a select input type
const renderOptions=(options)=>{
  return options.map((child)=>{
      return(
          <option key={child.value} value={child.value}>{child.label}</option>
      );
  });
};

const CustomForm=({ template, data, handleform})=>{

  let {register,errors,watch} = handleform;

const renderFields = (fields) => {

        return fields.map(field => {
            let { type, title, name, required,validation} = field;

            console.log(watch());

switch(type){
      case 'text':
    return (
      
        <FormGroup key={name}>

         <Label htmlFor={name}>
                  {title}
                  <span style={required?{color:'red'}:{}}>*</span> 
                 </Label>

                 <input             
                  type='text' 
                  id="firstname"
                  {...register(name,{required:required,validate:validation})} 
                  />        

          
              </FormGroup>

    );

     case 'select':
    let {options}=field;
    return (
      <FormGroup key={name}>
        <Label htmlFor={name}>{title}<span style={required?{color:'red'}:{}}>*</span></Label>
        <Input  
             type='select' 
             name={name} 

             {...register(name)}
        >


            {renderOptions(options)}
        </Input>
          </FormGroup>
    );

      default:
       return (
        <div>
          <span>Invalid Field</span>
               </div>
    );
      }
   });

};
let { title, Fields } = template;
    return (
        <>
            <h4>{title}</h4>
            <Row>
                <Col>
                    {renderFields(Fields)}
                </Col>
            </Row>
        </>

    );
  
  

}


export default CustomForm;