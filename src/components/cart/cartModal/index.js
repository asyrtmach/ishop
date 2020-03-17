import React, { Component } from 'react';

import CartModalItem from './cartModalItem';

import './cartModal.sass'

class CartModal extends Component { 

    pagging = (id) => {
        const {items} = this.props;            
        const newArr = items;      
        const currentIdx = id*3;

        if(newArr.length > 3){
            const paggingArr = newArr.slice(currentIdx,currentIdx+3);           
            return paggingArr;
        }

        return items;
    }

    paggingButtons = () => {
        const {items, onPageHandle} = this.props;
        let buttons = [];
        for(let i = 0; i < Math.ceil(items.length/3); i++){
            buttons[i] = (
                <li className="cart-modal-content-body-pagging-menu__item">
                    <button
                    onClick={() => onPageHandle(i)}>{i+1}</button>
                </li> 
            )
        }
        return buttons;
    }
    
    render() {
        const {items, page, onAddItem, onRemoveItem, FullCount, onDeleteItem, FullSum} = this.props; 
        const arr = this.pagging(page);
        const buttonsArr = this.paggingButtons();         
        return (
            <div className="cart-modal">
                <div className="cart-modal-content">
                    <div className="cart-modal-content-header">
                        <h3 className="cart-modal-content-header-title">Ваша корзина</h3>
                    </div>
                    <div className="cart-modal-content-body">
                        {
                            arr.length === 0 ? <span className="cart-modal-content-body__item">Ваша корзина пуста</span> : (
                                arr.map((item, index) => {
                                return(
                                    <CartModalItem
                                    item={item}
                                    onAddItem={onAddItem}
                                    onRemoveItem={onRemoveItem}
                                    onDeleteItem={onDeleteItem}                                    
                                    />
                                )
                            })
                            )
                        }

                        {
                            items.length > 3 ? (<div className="cart-modal-content-body-pagging">
                            <ul className="cart-modal-content-body-pagging-menu">
                                {
                                    buttonsArr.map((item) => item)
                                }                           
                            </ul>
                        </div>) : null
                        }
                    </div>
                    <div className="cart-modal-content-footer">
                        <div className="cart-modal-content-footer-controls">
                            <span className="cart-modal-content-footer-controls-items">
                                Всего вещей: 
                                <span className="cart-modal-content-footer-controls-items-count">
                                    {FullCount(items)}
                                </span>
                            </span>
                            <span className="cart-modal-content-footer-controls-sum">
                                Сумма: 
                                <span className="cart-modal-content-footer-controls-sum-amount">{FullSum(items)} USD</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartModal;