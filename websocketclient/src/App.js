
import './App.css';
import { w3cwebsocket as W3CWebSocket} from "websocket";
import { useEffect, useState } from 'react';
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';
import './index.css'

const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

const client = new W3CWebSocket('ws://127.0.0.1:8080');

function App() {

  const[userName,setUsername] = useState('');

  const [isLoggedIn,setisLoggedIn] = useState(false);
  const [messages,setMessages] = useState([]);

  const [searchVal,setSearchVal] = useState('');

  useEffect(() => {
    client.open = () => {
      console.log('Websocket client connected');
    }
  },[])

  useEffect(() => {
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply ',dataFromServer);
      if(dataFromServer.type === "message") {
        setMessages([...messages,{msg: dataFromServer.msg, user: dataFromServer.user}])
      }
    }
  })


  const onButtonClicked = (value) => {
    console.log("sending message");
    client.send(JSON.stringify({
      type:"message",
      msg: value,
      user: userName
    }))

  }
  return (
    <div className="main" id='wrapper'>
    {isLoggedIn ?
    <div>
      <div className="title">
        <Text id="main-heading" type="secondary" style={{ fontSize: '36px' }}>Websocket Chat: {userName}</Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50 }} id="messages">
        {messages.map(message => 
          <Card key={message.msg} style={{ width: 300, margin: '16px 4px 0 4px', alignSelf: userName === message.user ? 'flex-end' : 'flex-start' }} loading={false}>
            <Meta
              avatar={
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{message.user[0].toUpperCase()}</Avatar>
              }
              title={message.user+":"}
              description={message.msg}
            />
          </Card> 
        )}
      </div>
      <div className="bottom">
        <Search
          placeholder="input message and send"
          enterButton="Send"
          value={searchVal}
          size="large"
          onChange={(e) => setSearchVal(e.target.value)}
          onSearch={value => onButtonClicked(value)}
        />
      </div> 
    </div>
    :
    <div style={{ padding: '200px 40px' }}>
      <Search
        placeholder="Enter Username"
        enterButton="Login"
        size="large"
        onSearch={value => {  
          setisLoggedIn(true);
          setUsername(value)
        }}
      />
    </div>
  }
  </div>
  );
}

export default App;
