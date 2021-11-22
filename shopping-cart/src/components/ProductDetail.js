import React from 'react';
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
    const {state} = useLocation();
    console.log("state ",state);
    return (
        <div>Product Detail</div>
    );
}

export default ProductDetail;