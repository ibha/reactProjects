import React, {useState,useSelector, useDispatch} from 'react';
import { useState } from 'react-redux';
import { enterRoom, joinRoom } from './actions';

function ChatRoom() {
  const [usernameInput, setUsernameInput] = useState("");
  const username = useSelector(state => state.username)
  const dispatch = useDispatch();

  return(
    <div>
      {!username &&
      <div>
          <input type="text" placeholder="Enter username" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} />
          <button onClick={()=>dispatch(enterRoom(username))}>Enter Room</button>
      </div>
      }
      {username &&
            <div className="room">
                <div className="history"></div>
                <div className="control">
                    <input type="text" />
                    <button>Send</button>
                </div>
            </div>
      }
    </div>
  );
}

export default ChatRoom;