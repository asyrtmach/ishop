import React, { Component } from 'react';

import CartModal from './cartModal/';

import './cart.sass'

class Cart extends Component {
    render() {
        const {img} = this.props;
        return (
            <div className="cart">
                <img src={img} alt="Cart"/>
                <span className="header-navbar-controls__item-counter">2</span>
                <CartModal/>
            </div>
        );
    }
}

export default Cart;