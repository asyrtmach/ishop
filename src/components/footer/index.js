import React, { Component } from 'react'

import './footer.sass';

import Logo from './img/ModaX.png';
import visa from './img/visa.png';
import pp from './img/pp.png';
import mc from './img/mc.png';
import mstr from './img/mstr.png';
import amex from './img/amex.png';

export default class Footer extends Component {
    
    render() {
        const payments = [visa,pp,mc,mstr,amex];
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer-block">
                        <div className="footer-logo">
                            <a href="#">                            
                                <img src={Logo} alt="logo"/>
                            </a>
                        </div>
                        <div className="footer-social">
                            <a href="#" className="footer-social__item"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#" className="footer-social__item"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#" className="footer-social__item"><i class="fa fa-behance" aria-hidden="true"></i></a>
                            <a href="#" className="footer-social__item"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                            <a href="#" className="footer-social__item"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="footer-block">
                        <div className="footer-menu">
                            <ul className="footer-menu-links">
                                <li className="footer-menu-links__item"><a href="#">Man</a></li>
                                <li className="footer-menu-links__item"><a href="#">Woman</a></li>
                                <li className="footer-menu-links__item"><a href="#">Lookbook</a></li>
                                <li className="footer-menu-links__item"><a href="#">Sale</a></li>
                                <li className="footer-menu-links__item"><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <form action="post" className="footer-form">
                            <h3 className="footer-form-title">Subscribe to news</h3>
                            <div className="footer-form-controls">
                                <input type="text" className="footer-form-controls-input" placeholder="email address"/>
                                <button type="submit" className="footer-form-controls-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="footer-block">
                        <h3 className="footer-contact-us">Contact US</h3>
                        <span className="footer-address">
                        San Francisco, California
                        400 Castro St, San Francisco, CA
                        (+1) 686-868-9999
                        </span>
                        <div className="footer-payments">
                            {
                                payments.map((item, index) => {
                                    return <img key={index} src={item} alt="payments" className="footer-payments__item"/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
