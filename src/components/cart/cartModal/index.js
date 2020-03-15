import React, { Component } from 'react';

import './cartModal.sass'

class CartModal extends Component {
    render() {
        return (
            <div className="cart-modal">
                <div className="cart-modal-content">
                    <div className="cart-modal-content-header">
                        <h3 className="cart-modal-content-header-title">Ваша корзина</h3>
                    </div>
                    <div className="cart-modal-content-body">
                        <div className="cart-modal-content-body__item">
                            <div className="cart-modal-content-body__item-cover">
                                <img src="" alt="cover" className="cart-modal-content-body__item-cover-img"/>
                            </div>
                            <span className="cart-modal-content-body__item-title">Футболка</span>
                            <span className="cart-modal-content-body__item-price">145 USD</span>
                            <div className="cart-modal-content-body__item-controls">
                                <div className="cart-modal-content-body__item-controls-count">
                                    <button className="cart-modal-content-body__item-controls-count-btn">-</button>
                                    <span className="cart-modal-content-body__item-controls-count-items">3</span>
                                    <button className="cart-modal-content-body__item-controls-count-btn">+</button>
                                </div>
                                <span className="cart-modal-content-body__item-controls-sum">435 USD</span>
                                <button className="cart-modal-content-body__item-controls-delete">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-modal-content-footer">
                        <div className="cart-modal-content-footer-controls">
                            <span className="cart-modal-content-footer-controls-items">
                                Всего вещей: 
                                <span className="cart-modal-content-footer-controls-items-count">3</span>
                            </span>
                            <span className="cart-modal-content-footer-controls-sum">
                                Сумма: 
                                <span className="cart-modal-content-footer-controls-sum-amount">435 USD</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartModal;