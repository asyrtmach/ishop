import React from 'react';

import {Logo, CartIcon, Search, PrevArrow, NextArrow} from '../svg';
import Girl from './img/girl.png';
import Carousel from '../carousel';
import Cart from '../cart/';

import './header.sass';


const Header = () => {
    return (
        <header className="header">
            <div className="container">

                <div className="header-navbar">
                    <div className="header-navbar-logo">
                        <a href="#">
                            <img src={Logo} alt="logo"/>
                        </a>
                    </div>
                    <div className="header-navbar-menu">
                        <ul className="header-navbar-menu-navigation">
                            <li className="header-navbar-menu-navigation__item"><a href="#">Home</a></li>
                            <li className="header-navbar-menu-navigation__item"><a href="#">Shop</a></li>
                            <li className="header-navbar-menu-navigation__item"><a href="#">Portfolio</a></li>
                            <li className="header-navbar-menu-navigation__item"><a href="#">Page</a></li>
                            <li className="header-navbar-menu-navigation__item"><a href="#">Blog</a></li>
                            <li className="header-navbar-menu-navigation__item"><a href="#">Elements</a></li>
                        </ul>
                    </div>
                    <div className="header-navbar-controls">
                        <a href="#" className="header-navbar-controls__item">Log in</a>
                        <a href="#" className="header-navbar-controls__item">Sign in</a>
                        <a className="header-navbar-controls__item">
                            <Cart
                            img={CartIcon}/>
                        </a>
                        <a href="#" className="header-navbar-controls__item">
                            <img src={Search} alt="Search"/>
                        </a>
                    </div>
                </div>

                <div className="header-main">
                    <div className="header-main-carousel">
                        <Carousel
                            dots={false}
                            infinite={true}
                            slidesToShow={1}
                            slidesToScroll={1}                            
                            prevArrow={
                                <button className="banner-carousel-prev" aria-label="Previous" type="button">
                                    <img src={PrevArrow} alt="prev"/>
                                </button>
                            }
                            nextArrow={
                                <button className="banner-carousel-next" aria-label="Next" type="button">
                                    <img src={NextArrow} alt="next"/>
                                </button>
                            }>
                            <div className="header-main-carousel__item">
                                <span>Fashion</span>
                                <img className="header-main-carousel__item-cover" src={Girl} alt="girl"/>
                                <h1>New Arrival</h1>
                                <a href="#">Buy Now</a>
                            </div>
                            <div className="header-main-carousel__item">
                                <span>Fashion</span>
                                <img className="header-main-carousel__item-cover" src={Girl} alt="girl"/>
                                <h1>New Arrival</h1>
                                <a href="#">Buy Now</a>
                            </div>
                        </Carousel>
                    </div>                    
                </div>
            </div>
        </header>
    )
}

export default Header;