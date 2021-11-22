import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import greyTshirt from '../images/greytshirt.jpg'

const Cart = () => {
     const result = useSelector(state => {

        return state.basketState.items
    })

   
/*    const selectedItem = useSelector(state => {
        console.log(state.basketState);
        return state.basketState.item.item.id
    })

    let result = data;
    result = data.filter(item => { 
        if(item.id === selectedItem) {
            item.inCart = true;
            item.quantity += 1;
        }
        return item.inCart === true;
    })
    console.log(result);*/
    return (

        <div>

            {
                result.map(item => {
                   return( 
                        <div class="container-products">
                            <div class="product-header">
                            <img src={item.img} alt="item.title"></img>
                                <h5 class="product-title">{item.title}</h5>
                                <h5 class="price sm-hide">{item.price}</h5>
                                <h5 class="quantity">{item.quantity}</h5>
                            </div>
                            <div class="products">

                            </div>
                        </div>

                   )
                })}
                
                </div>

    );
}
export default Cart;


