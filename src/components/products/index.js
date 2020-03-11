import React, { Component } from 'react';

import {NextArrow, Fire} from '../svg';
import RoundArrows from '../features/svg/ui.svg';
import Pic from './img/pic.png';
import Goods from '../../services/items.json';
import ProductsService from '../../services/productsService.js';

import './products.sass';

export default class Products extends Component {

    productsService = new ProductsService();

    state = {
        items: []
    }
    componentDidMount(){
        this.setState(
            {
                items: this.productsService.initialLoad(Goods)
            }
        )
    }

    newItems(mainArr, arr){
        const newElems = this.productsService.loadMore(mainArr, arr);
        const newArr = [...arr, ...newElems];        
        this.setState({
            items: newArr
        })
    }


    render() {
        const {items} = this.state;
        
        return (
            <section className="products">
                <div className="container">
                    <div className="products-showcase">
                    {
                        items.map((item,index) => {
                            if(item.popular){
                                return (
                                    <div className="products-showcase__item products-showcase__item--popular" key={index}>
                                        <img src={Fire} alt="fire"/>
                                        <h4 className="products-showcase__item--popular-title">Popular Product</h4>
                                        <a href="#" className="products-showcase__item--popular-more">
                                            More Product
                                            <img src={NextArrow} alt="next"/>
                                        </a>
                                    </div>
                                )
                            }
                            if(item.banner){
                                return (
                                    <div className="products-showcase__item products-showcase__item--banner" key={index}>
                                        <div className="left-side">
                                            <span className="products-showcase__item--banner-newicon">New</span>
                                            <span className="products-showcase__item--banner-type">lifestyle</span>
                                            <span className="products-showcase__item--banner-nameplate">lifestyle New Now: Striped cotton</span>
                                            <a href="#" className="products-showcase__item--banner-buynow">
                                                <span className="products-showcase__item--banner-buynow-price">$50.00 USD</span>
                                                <span className="products-showcase__item--banner-buynow-text">buy now</span>
                                            </a>
                                        </div>
                                        <div className="right-side">
                                            <img src={Pic} alt="pic"/>
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div className="products-showcase__item" key={index}> 
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
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="products-footer">
                        <button
                        className="products-footer-btn"
                        onClick={() => this.newItems(Goods, items)}
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
