import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import CounterComponent from './components/CounterComponent/CounterComponent'
import HomeComponent from './components/HomeComponent/HomeComponent'
import UserComponent from './components/UserComponent/UserComponent'
import TodoComponent from './components/TodoComponent/TodoComponent';
import BinarySearchTree from './components/BinarySearchTree/BinarySearchTree'
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
import UploadFileComponent from './components/UploadFile/UploadFileComponent';

function App() {

  return (
    <Router>
      <ul>
      <li>
          <Link to="/home">HomeComponent
          </Link>
        </li>
        <li>
          <Link to="/counter">CounterComponent
          </Link>
        </li>
        <li>
          <Link to="/users">UserComponent
          </Link>
        </li>
        <li>
          <Link to="/todo">ToDoComponent
          </Link>
        </li>
        <li>
          <Link to="/bst">BinarySearchTree
          </Link>
        </li>
        <li>
          <Link to="/infiniteScroll">InfiniteScroll
          </Link>
        </li>
        <li>
          <Link to="/uploadFile">uploadFile
          </Link>
        </li>
      </ul>
      <Switch>
              <Route exact path='/' component={HomeComponent}></Route>
              <Route exact path='/counter' component={CounterComponent}></Route>
              <Route exact path='/users' component={UserComponent}></Route>
              <Route exact path='/bst' component={BinarySearchTree}></Route>
              <Route exact path='/infiniteScroll' component={InfiniteScroll}></Route>
              <Route exact path='/uploadFile' component={UploadFileComponent}></Route>
              <Route exact path='/todo' component={TodoComponent}></Route>
              
            </Switch>
    </Router>
  );
}

export default App;
