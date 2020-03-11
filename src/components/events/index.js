import React, { Component } from 'react';

import Carousel from '../carousel';
import PrevArrow from './svg/left-arrow.svg';
import NextArrow from './svg/right-arrow.svg';
import Event1 from './img/event1.png';

import './events.sass';


export default class Events extends Component {

    render() {
        return (
            <section className="events">
                <div className="events-carousel">
                <Carousel
                            dots={true}
                            infinite={true}
                            slidesToShow={1}
                            slidesToScroll={1}                            
                            prevArrow={
                                <button className="events-carousel-prev" aria-label="Previous" type="button">
                                    <img src={PrevArrow} alt="prev"/>
                                </button>
                            }
                            nextArrow={
                                <button className="events-carousel-next" aria-label="Next" type="button">
                                    <img src={NextArrow} alt="next"/>
                                </button>
                            }>
                            <div className="events-carousel__item">
                                <img src={Event1} alt="Event1" className="events-carousel__item-cover"/>
                                <h3 className="events-carousel__item-type">Event</h3>
                                <h2 className="events-carousel__item-name">London Fashion Week September 2017</h2>
                                <span className="events-carousel__item-date">15th - 19th September 2017</span>
                            </div>  

                            <div className="events-carousel__item">
                                <img src={Event1} alt="Event1" className="events-carousel__item-cover"/>
                                <h3 className="events-carousel__item-type">Event</h3>
                                <h2 className="events-carousel__item-name">London Fashion Week September 2017</h2>
                                <span className="events-carousel__item-date">15th - 19th September 2017</span>
                            </div>    

                            <div className="events-carousel__item">
                                <img src={Event1} alt="Event1" className="events-carousel__item-cover"/>
                                <h3 className="events-carousel__item-type">Event</h3>
                                <h2 className="events-carousel__item-name">London Fashion Week September 2017</h2>
                                <span className="events-carousel__item-date">15th - 19th September 2017</span>
                            </div>                            
                        </Carousel>
                </div>
            </section>
        )
    }
}
