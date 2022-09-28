import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    // const {handelAddToCart}=props;
    const {name,img,seller,price,ratings}=props.product;
    // console.log(props);
    return (
        <div className='product'>
           <img src={img} alt=""></img>
           <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p>Price: ${price}</p>
           <p><small>Seller: {seller}</small></p>
           <p><small>Stars: {ratings}</small></p>
           </div>
           <button onClick={()=> props.handelAddToCart(props.product)} className='btn-cart'>
            <p>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;