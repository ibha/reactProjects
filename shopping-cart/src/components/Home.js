import React, {useState} from 'react';
import ProductList from './ProductList';
import Search from './Search';

function Home() {



    return (
        <>
        <Search className="search"></Search>
        <div className="container">
            <ProductList></ProductList>
        </div>
        </>
    );

}

export default Home;