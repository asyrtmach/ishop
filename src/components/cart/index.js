import React, { Component } from 'react';

import CartModal from './cartModal/';

import './cart.sass'

class Cart extends Component {

    state = {
        items:[
            {
                "img": "https://storage.vsemayki.ru/images/0/1/1960/1960261/previews/people_8_child_tshirt_front_white_250.jpg",
                "text": "BRAWL STARS LEON SHARK",
                "type": "Детская футболка 3D",
                "price": "1535 руб.",
                "popular": false,
                "banner": false,
                "sale": false,
                "count": "1"
            },{
                "img": "https://storage.vsemayki.ru/images/0/1/1852/1852825/previews/people_13_manshortfull_front_white_250.jpg",
                "text": "Monsters Rick and Morty",
                "type": "Мужская футболка 3D",
                "price": "1660 руб.",
                "popular": false,
                "banner": false,
                "sale": true,
                "count": "3"
            }
        ]
    }

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
    
        const {items} = this.state;
        const {img} = this.props;
        const headerCounter = items ? <span className="header-navbar-controls__item-counter">{this.fullCount(items)}</span> : null
        return (
            <div className="cart">
                <img src={img} alt="Cart"/>
                <span className="header-navbar-controls__item-counter">{this.fullCount(items)}</span>
                {headerCounter}
                <CartModal
                items={items}
                onAddItem={this.addItemHandle}
                onRemoveItem={this.removeItemHandle}
                FullCount={this.fullCount}
                FullSum={this.fullSum}
                />
            </div>
        );
    }
}

export default Cart;