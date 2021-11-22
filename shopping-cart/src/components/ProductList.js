import React from 'react';
import data from './assets/home.json';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const ProductList = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchTerm = useSelector(state => state.searchState.searchTerm);
    console.log("Search Term ",searchTerm);
    let result = data;
    console.log(searchTerm);
    if(searchTerm) {
        result = data.filter((item) => item.title.includes(searchTerm));
    }

    const showProductDetails = (item) => {
        console.log("entered click");
        navigate('/detail', { state: item });
    }
    return (

                result.map((item,i) => {
                   

                    return (
                        <div className="image" key={item.id} onClick={showProductDetails(item)}>
                                        
                            <img src={item.img} alt="item.title"></img>
                            <h3>{item.title}</h3>
                            <h3>{item.price}</h3>
                            <a className="addToCart cart4" onClick={()=>dispatch({type: "ADD_PRODUCT_BASKET",payload: {item}})} href="#" >Add to Cart</a>
                        </div>
                    );
            })

    );

        }

export default ProductList;