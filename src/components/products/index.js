import React, { Component } from 'react';

import {NextArrow, Fire} from '../svg';

import './products.sass';

export default class Products extends Component {
    render() {
        return (
            <section className="products">
                <div className="container">
                    <div className="products-showcase">

                        <div className="products-showcase__item products-showcase__item--popular">
                            <img src={Fire} alt="fire"/>
                            <h4 className="products-showcase__item--popular-title">Popular Product</h4>
                            <a href="#" className="products-showcase__item--popular-more">
                                More Product
                                <img src={NextArrow} alt="next"/>
                            </a>
                        </div>

                        <div className="products-showcase__item">

                        </div>
                        <div className="products-showcase__item"></div>
                        <div className="products-showcase__item"></div>
                        <div className="products-showcase__item"></div>
                        <div className="products-showcase__item products-showcase__item--banner"></div>
                        <div className="products-showcase__item"></div>
                        <div className="products-showcase__item"></div>
                        <div className="products-showcase__item"></div>
                        <div className="products-showcase__item"></div>
                    </div>
                </div>
            </section>
        )
    }
}
