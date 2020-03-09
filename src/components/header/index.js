import React from 'react';

import {Logo, Cart, Search, PrevArrow, NextArrow} from '../svg';
import Girl from './img/girl.png';
import HeaderCarousel from '../carousel';

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
                        <a href="#" className="header-navbar-controls__item">
                            <img src={Cart} alt="Cart"/>
                            <span className="header-navbar-controls__item-counter">2</span>
                        </a>
                        <a href="#" className="header-navbar-controls__item">
                            <img src={Search} alt="Search"/>
                        </a>
                    </div>
                </div>

                <div className="header-main">
                    <div className="header-main-carousel">
                        <HeaderCarousel
                            showArrows={true} 
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            infiniteLoop={true}
                        >
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
                        </HeaderCarousel>
                    </div>                    
                </div>
            </div>
        </header>
    )
}

export default Header;