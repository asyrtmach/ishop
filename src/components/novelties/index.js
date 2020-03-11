import React, { Component } from 'react';


import Man from './img/man.png';
import Girl from './img/girl.png';

import './novelties.sass';

export default class Novelties extends Component {

    state = {
        items: [
            {
                type: 'Suits',           
                text: 'Slim Fit Prince of Wales Check Wool',           
                price: '• 2,295.00 USD',          
                img: Man
            },
            {
                type: 'Scarves',           
                text: 'Lightweight check wool cashmere scarf',           
                price: '• 425.00 USD',          
                img: Girl
            }
        ]
    }

    render() {

        const {items} = this.state;

        return (
            <section className="novelties">
                <div className="container">
                    <div className="novelties-showcase">
                        {
                            items.map((item,index) => {
                                return(
                                    <div className="novelties-showcase__item" key={index}>
                                        <div className="novelties-showcase__item-description">
                                            <h3 className="novelties-showcase__item-description-type">{item.type}</h3>
                                            <div className="novelties-showcase__item-description-text">{item.text}</div>
                                            <div className="novelties-showcase__item-description-price">{item.price}</div>
                                        </div>
                                        <img className="novelties-showcase__item-img" src={item.img} alt="img"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
