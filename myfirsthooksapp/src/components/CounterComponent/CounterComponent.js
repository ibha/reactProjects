import React from 'react';
import PropTypes from 'prop-types';
import styles from './CounterComponent.module.css';

const CounterComponent = () => { 
  const [counter,setCounter] = React.useState(0);
  return (
  
  <div className={styles.CounterComponent} data-testid="CounterComponent">
    <button onClick={()=>setCounter(counter+1)}> Increment</button>
    Counter is {counter}
  </div>
)};

CounterComponent.propTypes = {};

CounterComponent.defaultProps = {};

export default CounterComponent;
