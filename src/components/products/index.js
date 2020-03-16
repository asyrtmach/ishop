import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

import {fetchItems, itemAddedToCart} from '../../redux/actions/cartActions.js';

import {NextArrow, Fire} from '../svg';
import RoundArrows from '../features/svg/ui.svg';
import Pic from './img/pic.png';
import {compose, withProductsService} from '../HOC-helpers';



import './products.sass';

class Products extends Component {

    componentDidMount(){
        this.props.fetchItems();
    }

    render() {
               const {items, loading, error, onAddedToCart } = this.props;
        return (
            <section className="products">
                <div className="container">
                    <div className="products-showcase">
                    {
                        items.map((item,index) => {
                            if(item.popular){
                                return (
                                    <div className="products-showcase__item products-showcase__item--popular" key={item.id}>
                                        <img src={Fire} alt="fire"/>
                                        <h4 className="products-showcase__item--popular-title">Popular Product</h4>
                                        <Link to='/catalog' className="products-showcase__item--popular-more">
                                            More Product
                                            <img src={NextArrow} alt="next"/>
                                        </Link>
                                    </div>
                                )
                            }
                            if(item.banner){
                                return (
                                    <div className="products-showcase__item products-showcase__item--banner" key={item.id}>
                                        <div className="left-side">
                                            <span className="products-showcase__item--banner-newicon">New</span>
                                            <span className="products-showcase__item--banner-type">lifestyle</span>
                                            <span className="products-showcase__item--banner-nameplate">lifestyle New Now: Striped cotton</span>
                                            <Link to="/detail" className="products-showcase__item--banner-buynow">
                                                <span className="products-showcase__item--banner-buynow-price">$50.00 USD</span>
                                                <span className="products-showcase__item--banner-buynow-text">buy now</span>
                                            </Link>
                                        </div>
                                        <div className="right-side">
                                            <img src={Pic} alt="pic"/>
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div className="products-showcase__item" key={item.id}> 
                                    <div className="products-showcase__item-img">
                                        {
                                            item.sale ? <span className="products-showcase__item-img-saleicon">sale</span> : null
                                        }
                                        <img src={item.img} alt={item.text}/>
                                    </div>
                                    <div className="products-showcase__item-description">
                                        <span className="products-showcase__item-description-title">{item.text}</span>
                                        <div className="products-showcase__item-description-prices">
                                            <span className={item.sale ? `products-showcase__item-description-prices-old products-showcase__item-description-prices-old-crossed` : `products-showcase__item-description-prices-old`}>{`$${parseInt(item.price)/10} USD`}</span>
                                            {
                                                item.sale ? <span className="products-showcase__item-description-prices-actual">{`$${(parseInt(item.price) - (parseInt(item.price)*0.2))/10} USD`}</span> : null
                                            }                                                                                     
                                        </div>
                                    </div>
                                    <div className="products-showcase__item-cover">
                                        <div className="products-showcase__item-cover-filter"></div>
                                        <div className="products-showcase__item-cover-controls">
                                            <button 
                                            onClick={() => onAddedToCart(item.id)}
                                            className="products-showcase__item-cover-controls-btn">Add to cart</button>
                                            <button className="products-showcase__item-cover-controls-btn">Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="products-footer">
                        <button
                        className="products-footer-btn"
                        onClick={() => this.newItems(items)}
                        >
                            <img src={RoundArrows} alt="RoundArrows"/>
                            load more
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = ({ items, loading, error }) => {
    return { items, loading, error };
  };


const mapDispatchToProps = (dispatch, { productsService }) => {
    return {
      fetchItems: fetchItems(productsService, dispatch),
      onAddedToCart: (id) => dispatch(itemAddedToCart(id))
    };
  }; 

export default compose(
    withProductsService(),
    connect(mapStateToProps, mapDispatchToProps))(Products);