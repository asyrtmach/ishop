import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartModal from './cartModal/';
import {compose, withProductsService} from '../HOC-helpers';


import './cart.sass'

class Cart extends Component {

    // state = {
    //     items:[
            
    //     ],
    //     isVisble: true
    // }

    addItemHandle = (id) => {
        const arr = this.state.items;
        arr[id].count = parseInt(arr[id].count)+1;        
        this.setState({          
            items:arr
        })
    }

    removeItemHandle = (id) => {
        const arr = this.state.items;        
        if(parseInt(arr[id].count) != 1){
            arr[id].count = parseInt(arr[id].count)-1;
            this.setState({          
                items:arr
            })
        }
        return null
    }

    deleteItemHandle = (id) => {
        const arr = this.state.items;
        arr.splice(id, 1);
        this.setState({
            items:arr
        })
    }

    cartHandle = () =>{
        const isCartVisble = this.state.isVisble;
        console.log(isCartVisble)
        // this.setState({
        //     isVisble: !isCartVisble
        // })
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
            fullSum += arr[i].sale ? ((parseInt(arr[i].price)-(parseInt(arr[i].price)*0.2))*arr[i].count) : parseInt(arr[i].price)*arr[i].count;            
        }
        return fullSum;
        }
        return null
    }

    render() {    
        const {img, cartItems} = this.props;
        const headerCounter = cartItems ? <span className="header-navbar-controls__item-counter">{this.fullCount(cartItems)}</span> : null
        return (
            <div
            onClick={this.cartHandle} 
            className="cart"
            >
                <img                 
                src={img} 
                alt="Cart"/>
                <span className="header-navbar-controls__item-counter">{this.fullCount(cartItems)}</span>
                {headerCounter}
                <CartModal                
                items={cartItems}
                onAddItem={this.addItemHandle}
                onRemoveItem={this.removeItemHandle}
                onDeleteItem={this.deleteItemHandle}
                FullCount={this.fullCount}
                FullSum={this.fullSum}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ cartItems, loading, error }) => {
    return { cartItems, loading, error };
  };


const mapDispatchToProps = (dispatch, { productsService }) => {
    // return {
    //   fetchItems: fetchItems(productsService, dispatch),
    //   onAddedToCart: (id) => dispatch(itemAddedToCart(id))
    // };
  }; 

export default compose(
    withProductsService(),
    connect(mapStateToProps, mapDispatchToProps))(Cart);

