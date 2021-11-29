import React from 'react';
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
    const {state} = useLocation();
    const {img,title,price} = state;
    console.log("state ",state);
    return (
        <div className="container"> 
            <img src={img}></img>
            <h2>{title}</h2>
            <h2>{price}</h2>
        </div>
    );
}

export default ProductDetail;