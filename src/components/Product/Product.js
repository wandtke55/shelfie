import React from 'react';

export default function Product(props){
    console.log(props.products)
    return(
        <div>
            <h1>Products</h1>
            <button>Delete</button>
          <p>{props.products.name}</p>
          <p>{props.products.price}</p>
          <img src={props.products.image} alt='' className='products-display'/>
        </div>
    )
}