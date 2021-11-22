import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Navbar = () => {
    const basketState = useSelector((state) => {
      console.log(state);
      return state.basketState;
    })
    return (
        <header>
        <div className="overlay">
        <nav>
          <h2>Shop</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/new">New Product</Link>
            </li>
            <li className="cart">
              <Link to="/cart">
              <ion-icon name="basket"></ion-icon>
              Cart<span>{basketState.basketNumbers}</span></Link>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    );
}

export default Navbar;