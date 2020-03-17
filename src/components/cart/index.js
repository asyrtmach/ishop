import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartModal from './cartModal/';
import {compose, withProductsService} from '../HOC-helpers';
import {handleCartPage, updateCart, toggleCart} from '../../redux/actions/cartActions.js';


import './cart.sass'

class Cart extends Component {

    addItemHandle = (id) => {
        const {cartItems, toggleCartItem} = this.props;
        const arr = cartItems;
        const itemId = id;      
        let existingItem = arr.find((item) => item.id === itemId);
        arr[arr.indexOf(existingItem)] = {
            ...existingItem,
            "count": +existingItem.count + 1
        }         
        return toggleCartItem(arr);
    }

    removeItemHandle = (id) => {
        const {cartItems, toggleCartItem} = this.props;
        const arr = cartItems;
        const itemId = id;
        let existingItem = arr.find((item) => item.id === itemId);       
        if(parseInt(arr[arr.indexOf(existingItem)].count) != 1){            
            arr[arr.indexOf(existingItem)] = {
                ...existingItem,
                "count": +existingItem.count - 1
            } 
            return toggleCartItem(arr); 
        }
        return cartItems
    }

    deleteItemHandle = (id) => {
        const {cartItems, toggleCartItem} = this.props;
        const arr = cartItems;
        const itemId = id;      
        let existingItem = arr.find((item) => item.id === itemId);
        arr.splice(arr.indexOf(existingItem),1);
        return toggleCartItem(arr);
    }

    fullCount = (arr) => {
        if(arr){
            let fullCount = 0;
        for (let i = 0; i < arr.length; i++){
            fullCount += parseInt(arr[i].count);
        }
        return fullCount;
        }
        return null
    }

    fullSum = (arr) => {
        if (arr) {
            let fullSum = 0;
        for (let i = 0; i < arr.length; i++){
            fullSum += arr[i].sale ? (((parseInt(arr[i].price)/10)-(parseInt(arr[i].price)*0.02))*arr[i].count) : (parseInt(arr[i].price)/10)*arr[i].count;            
        }
        return fullSum;
        }
        return null
    }

    cartHandle = () =>{
        const {toggleCart, cartVisible} = this.props;
        const isVisible = cartVisible;        
        return toggleCart(!isVisible);
    } 

    

    

    render() {    
        const {img, cartItems, currentCartPage, onPageHandle, cartVisible} = this.props;
        const headerCounter = cartItems ? <span className="header-navbar-controls__item-counter">{this.fullCount(cartItems)}</span> : null
        return (
            <div
            className="cart"
            >
                <div 
                onClick={() => this.cartHandle()}
                className="cart-icon-wrapper">
                    <img                 
                    src={img} 
                    alt="Cart"/>
                    <span className="header-navbar-controls__item-counter">{this.fullCount(cartItems)}</span>
                    {headerCounter}
                </div>                
                {
                    cartVisible ? (
                        <CartModal                
                    items={cartItems}
                    page={currentCartPage}
                    onPageHandle={onPageHandle}                
                    onAddItem={this.addItemHandle}
                    onRemoveItem={this.removeItemHandle}
                    onDeleteItem={this.deleteItemHandle}
                    FullCount={this.fullCount}
                    FullSum={this.fullSum}
                    />
                    ) : null
                    
                }
            </div>
        );
    }
}

const mapStateToProps = ({ cartItems, loading, error, currentCartPage, cartVisible }) => {
    return { cartItems, loading, error, currentCartPage, cartVisible};
  };


const mapDispatchToProps = (dispatch) => {
    return {
        onPageHandle: (id) => dispatch(handleCartPage(id)),
        toggleCartItem: (arr) => dispatch(updateCart(arr)),
        toggleCart: (isVisible) => dispatch(toggleCart(isVisible))     
    };
  }; 

export default compose(
    withProductsService(),
    connect(mapStateToProps, mapDispatchToProps))(Cart);

