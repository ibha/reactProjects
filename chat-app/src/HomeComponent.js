import React, {useState, useSelector, useDispatch} from 'react';
import { createRoom, joinRoom } from './actions';
import ChatRoom from './ChatRoom';

function HomeComponent() {
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");
  const currentRoom = useSelector(state => state.room)
  const dispatch = useDispatch();

  return (
    <>
      {!currentRoom &&
        <div>
          <div>
            <span>Create Room</span>
            <input text="text" placeholder="Room name" value={roomName} onChange={e=>setRoomName(e.target.value)}/>
            <button onClick={()=>dispatch(createRoom(roomName))}>Create</button>
          </div>
          <div>
          <span>Join existing room</span>
                            <input type="text" placeholder="Room code" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
                     <span>Join existing room</span>
                            <input type="text" placeholder="Room code" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
                            <button onClick={() => dispatch(joinRoom(roomId))}>Join</button>

          </div>
          {currentRoom && <ChatRoom/>}
        </div>
      }

    </>
  );
}

export default HomeComponent;