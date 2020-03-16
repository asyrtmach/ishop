import React, { Component } from 'react';

import CartModalItem from './cartModalItem';

import './cartModal.sass'

class CartModal extends Component { 
    render() {
        const {items, onAddItem, onRemoveItem, FullCount, onDeleteItem, FullSum} = this.props;       
        return (
            <div className="cart-modal">
                <div className="cart-modal-content">
                    <div className="cart-modal-content-header">
                        <h3 className="cart-modal-content-header-title">Ваша корзина</h3>
                    </div>
                    <div className="cart-modal-content-body">

                        {
                            items.length === 0 ? <span className="cart-modal-content-body__item">Ваша корзина пуста</span> : (
                                items.map((item, index) => {
                                return(
                                    <CartModalItem
                                    {...this.props.items[index]}
                                    onAddItem={onAddItem}
                                    onRemoveItem={onRemoveItem}
                                    onDeleteItem={onDeleteItem}                                    
                                    id={index}/>
                                )
                            })
                            )
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