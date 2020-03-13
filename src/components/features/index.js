import React, { Component } from 'react';

import Shipping from './svg/send.svg';
import RoundArrows from './svg/ui.svg';
import Card from './svg/credit-card.svg';
import Person from './svg/man.svg';

import './features.sass';

export default class Features extends Component {
    state = {
        items: [
            {
              img: Shipping,
              title: "Free Shipping",
              info: "Oders over $99"
            },
            {
                img: RoundArrows,
                title: "30 days return",
                info: "If goods have problem"
            },
            {
                img: Card,
                title: "Secure payment",
                info: "100% secure payment"
              },
              {
                img: Person,
                title: "24h Support",
                info: "Dedicated Support"
              }
        ]
    }

    render(){
        const {items}  = this.state;
        
        return (
            <section className="features">
                <div className="container">
                    <div className="features-items">
                        {
                            items.map((item,index) => {
                                return (
                                    <div className="features__item" key={index}>
                                        <div className="left-side">
                                            <img src={item.img} alt="Feature-icon"/>
                                        </div>
                                        <div className="right-side">
                                            <h4 className="features__item-title">{item.title}</h4>
                                            <span className="features__item-info">{item.info}</span>
                                        </div>
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

