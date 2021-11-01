import React, { useEffect,useState,useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './UserComponent.module.css';

const UserComponent = () => {
  const [users,setUsers]=useState([]);

  const fetchMyAPI = useCallback(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      setUsers( users )
    });
  }, [])

  useEffect(()=>{
    fetchMyAPI()


  },[fetchMyAPI]);
  return(
    <div data-testid="UserComponent">
        Users length is {users.length}
        {users.length === 0?
        <p>EMPTY</p>:
        <ul>
          {
            users.map(usr =>
              <li key={usr.id}>{usr.name}</li>
            )
          }
    </ul>}
    </div>
)};

UserComponent.propTypes = {};

UserComponent.defaultProps = {};

export default UserComponent;
