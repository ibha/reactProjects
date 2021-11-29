import React from 'react';
import {Card, CardBody, Form, Row, Button} from 'reactstrap';
import { template } from './ProductTemplate';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import CustomForm from './CustomForm';

const NewProduct = () => {

  let {register, handleSubmit, errors,watch}=useForm();
  console.log("template ",template);
  console.log(watch());
  let handleform={
    register:register,
    errors:errors,
    watch:watch
 };

 const onSubmit = (data) => {
   console.log("Submitted",data);
 }
 return(
 <Card>
  <CardBody>
   <Form onSubmit={handleSubmit(data=>onSubmit(data))}>                  
    <Row className="d-flex justify-content-end">                     
      <Button                             
         type='submit'                            
         className="mt-0 mr-1"                            
         color="primary">                    
         Save Changes                        
       </Button>
       </Row>
       <CustomForm  
         template={template} 
         handleform={handleform}
        />
        
   </Form>
  </CardBody>
 </Card>)
}

export default NewProduct;