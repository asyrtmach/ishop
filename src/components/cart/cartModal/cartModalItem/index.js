import React, { Component } from 'react';

class CartModalItem extends Component {
    render() {
        const {item:{img, text, type, price, popular, banner, sale, count, id}, onAddItem, onRemoveItem, onDeleteItem} = this.props;        
        return (
            <div className="cart-modal-content-body__item" key={id}>
                <div className="cart-modal-content-body__item-cover">
                    <img src={img} alt="cover" className="cart-modal-content-body__item-cover-img"/>
                </div>
                <span className="cart-modal-content-body__item-title">{text}</span>
                <span className="cart-modal-content-body__item-price">{sale ? ((parseInt(price)/10)-(parseInt(price)*0.02)) : (parseInt(price)/10)} USD</span>
                <div className="cart-modal-content-body__item-controls">
                    <div className="cart-modal-content-body__item-controls-count">
                        <button 
                        onClick={() => onRemoveItem(id)}
                        className="cart-modal-content-body__item-controls-count-btn">-</button>
                        <span className="cart-modal-content-body__item-controls-count-items">{count}</span>
                        <button 
                        onClick={() => onAddItem(id)}
                        className="cart-modal-content-body__item-controls-count-btn">+</button>
                    </div>
                    <span className="cart-modal-content-body__item-controls-sum">{sale ? (((parseInt(price)/10)-(parseInt(price)*0.02))*count) : (parseInt(price)/10)*count} USD</span>
                    <button 
                    onClick={() => onDeleteItem(id)}
                    className="cart-modal-content-body__item-controls-delete">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>            
        )
        
    }
}

export default CartModalItem;