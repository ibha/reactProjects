import './logo.svg';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail'
import NewProduct from './components/NewProduct';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
     
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/detail" element={<ProductDetail />} />

          <Route path="/new" element={<NewProduct />} />

          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
