import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    // calculation start
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price;
        shipping=shipping+product.shipping;
    }
    const tax=parseFloat((total *0.1).toFixed(2));
    const grandTotal=total+shipping+tax;
    // const taxs=tax.toFixed(2);
    // calculation End
    return (
        <div className='cart'>
            <h4>Order summary</h4>
                <p>Selected Item: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Text: ${tax}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            
        </div>
    );
};

export default Cart;