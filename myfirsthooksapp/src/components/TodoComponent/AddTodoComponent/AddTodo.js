import React, {useState, useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../TodoComponent'

const AddTodo = () => {
  const [task, setTask] = useState('');
  const [dispatch] = useContext(TodoContext);
  const handleSubmit = event => {
    if (task) {
      dispatch({ type: 'ADD_TODO', task, id: uuidv4() });
    }
 
    setTask('');
 
    event.preventDefault();
  };
 
  const handleChange = event => setTask(event.target.value);
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
