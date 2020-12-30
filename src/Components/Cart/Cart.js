import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const Total = cart.reduce((total,TotalPrice) => total + TotalPrice.price, 0);
    const grandTotal = (Total).toFixed(2);
    return (
        <div className="cart-text">
            <h3>SUMMARY OF CART</h3>
            <h5>Total Count : {cart.length}</h5>
            <h5>Total Amount : {grandTotal}</h5>
            <button className="btn btn-primary">Review Cart</button>
        </div>
    );
};

export default Cart;