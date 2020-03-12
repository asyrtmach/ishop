import React, { Component } from 'react'

import './footer.sass';


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer-block">
                        <div className="footer-logo">
                            <a href="#">
                                <img src="" alt="logo"/>
                            </a>
                        </div>
                        <div className="footer-social">
                            <a href="#" className="footer-social__item"></a>
                            <a href="#" className="footer-social__item"></a>
                            <a href="#" className="footer-social__item"></a>
                            <a href="#" className="footer-social__item"></a>
                            <a href="#" className="footer-social__item"></a>
                        </div>
                    </div>
                    <div className="footer-block"></div>
                    <div className="footer-block"></div>
                </div>
            </footer>
        )
    }
}
