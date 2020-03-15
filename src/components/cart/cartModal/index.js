import React, { Component } from 'react';

import CartModalItem from './cartModalItem';

import './cartModal.sass'

class CartModal extends Component {

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
        let fullCount = 0;
        for (let i = 0; i < arr.length; i++){
            fullCount += parseInt(arr[i].count);
        }
        return fullCount;
    }

    fullSum = (arr) => {
        let fullSum = 0;
        for (let i = 0; i < arr.length; i++){
            fullSum += arr[i].sale ? ((parseInt(arr[i].price)-(parseInt(arr[i].price)*0.2))*arr[i].count) : parseInt(arr[i].price)*arr[i].count;            
        }
        return fullSum;
    }


    render() {
        const {items} = this.state;
        return (
            <div className="cart-modal">
                <div className="cart-modal-content">
                    <div className="cart-modal-content-header">
                        <h3 className="cart-modal-content-header-title">Ваша корзина</h3>
                    </div>
                    <div className="cart-modal-content-body">

                        {
                            items.map((item, index) => {
                                return(
                                    <CartModalItem
                                    {...this.state.items[index]}
                                    onAddItem={this.addItemHandle}
                                    onRemoveItem={this.removeItemHandle}                                    
                                    id={index}/>
                                )
                            })
                        }

                    </div>
                    <div className="cart-modal-content-footer">
                        <div className="cart-modal-content-footer-controls">
                            <span className="cart-modal-content-footer-controls-items">
                                Всего вещей: 
                                <span className="cart-modal-content-footer-controls-items-count">
                                    {this.fullCount(items)}
                                </span>
                            </span>
                            <span className="cart-modal-content-footer-controls-sum">
                                Сумма: 
                                <span className="cart-modal-content-footer-controls-sum-amount">{this.fullSum(items)} USD</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartModal;