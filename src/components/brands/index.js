import React, { Component } from 'react'

import './brands.sass';

import Brand1 from './img/brand1.png';
import Brand2 from './img/brand2.png';
import Brand3 from './img/brand3.png';
import Brand4 from './img/brand4.png';
import Prev from './img/prev.svg';
import Next from './img/next.svg';


import Carousel from '../carousel';

export default class Brands extends Component {
    
    state = {
        items: [Brand1, Brand2, Brand3 , Brand4, Brand1, Brand2, Brand3, Brand4]
    }

    render() {

        const {items} = this.state;

        return (
            <section className="brands">
                <div className="container">
                    <div className="brands-carousel">
                        <Carousel
                            dots={false}
                            infinite={true}
                            slidesToShow={4}
                            slidesToScroll={1}                            
                            prevArrow={
                                <button className="brands-carousel-prev" aria-label="Previous" type="button">
                                    <img src={Prev} alt="prev"/>
                                </button>
                            }
                            nextArrow={
                                <button className="brands-carousel-next" aria-label="Previous" type="button">
                                    <img src={Next} alt="next"/>
                                </button>
                            }>                  
                            {
                                items.map(item => {
                                    return(
                                        <div className="brands-carousel__item">
                                            <a href="#" className="brands-carousel__item-link">
                                                <img src={item} alt="logo" className="brands-carousel__item-link-img"/>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>                        
                    </div>
                </div>
            </section>
        )
    }
}
