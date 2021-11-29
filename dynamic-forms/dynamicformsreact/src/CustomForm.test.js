import { render, screen } from '@testing-library/react';
import CustomForm from './CustomForm';

const mockJson = [{
    "type": "string",
    "name": "First Name",
    "displayLabel": "First Name"
},
{
    "type": "string",
    "name": "Last Name",
    "displayLabel": "Last Name"
},
{
    "type": "options",
    "name": "Gender",
    "displayLabel": "Gender",
    "options": [
        {
            "name": "Male", 
            "value":"Male",
            "displayLabel": "M"
        },                 {
            "name": "Female", 
            "value": "Female",
            "displayLabel": "M"
        }
    ]

    
}
]


test('renders learn react link', () => {
  
  const { container } = render(<CustomForm formData={mockJson}/>);
  mockJson.map(field=> {
      switch(field.type) {
          case "string":  {
              const inputField = container.querySelector('input');
              expect(inputField).toBeInTheDocument();
          }
          default: return("This is default")
      }
  })
  
});