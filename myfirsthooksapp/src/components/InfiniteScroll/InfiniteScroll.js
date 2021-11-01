import React, {useCallback, useEffect, useState} from 'react';
import { useInfiniteScroll } from './useInfiniteScroll';

const InfiniteScroll = () => {

    const [ users,setUsers ] = useState([]);

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMyAPI);

    function fetchMyAPI() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(newUsers => {
          setUsers(prevState => ([...prevState, ...newUsers]) )
          setIsFetching(false);
        });
      }
    






    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-6 justify-content-center my-5">
                Users length is {users.length}
                {users.length === 0?
                    <p>EMPTY</p>:
                    <ul className="list-group mb-2">
                        { users.map((user) => 
                            <li className="list-group-item" key={user.id}>
                                { user.name }
                            </li>
                        
                        )}
                    </ul>
              
                }
                {isFetching && 'Fetching more list items...'}
                </div>
            </div>
           </div>
        </>
    );
}

export default InfiniteScroll;