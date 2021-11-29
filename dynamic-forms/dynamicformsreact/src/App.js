import React, { useState } from 'react';
import './App.css';
import CustomForm from './CustomForm';

function App() {
  const [country,setCountry] = useState('Europe');
  const [formData,setFormData] = useState([]);

  const updateCountry = (event) => {
    setCountry(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log("handleNext");
    event.preventDefault();
    const formdata = fetch(`http://localhost:8080/countryForm/${country}`)
      .then(res=>res.json())
      .then(data=> { 
        console.log(data);
        setFormData(data)
      })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="country">Country</label>
        <select id="country" value={country} onChange={updateCountry}>
          <option>India</option>
          <option>US</option>
          <option>Europe</option>
        </select>
        <div>
          <button type="submit">Next</button>
        </div>

      </form>

      {
          formData.length>0 && <CustomForm formData={formData}></CustomForm>

        }
    </div>
  );
}

export default App;
