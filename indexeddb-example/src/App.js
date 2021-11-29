import React, {useState} from 'react';
import './App.css';
import Dexie from 'dexie';
import Form from './Form'


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>setOpen(!open)}>{open ? 'Close' : 'Open'} Form</button>
    
    {
      open && <Form db={new Dexie('FormInstance')}></Form>
    }

    </div>
  );
}

export default App;
