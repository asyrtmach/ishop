import React, { Component } from 'react';

import NumberOfDay from './img/numberOfDay.png';
import SummerGirl from './img/girl2.jpg';
import LondonGirl from './img/girl1.jpg';
import ShowGirl from './img/girl3.jpg';


import PopularItem from './components/item';

import './popular.sass';


export default class Popular extends Component {

    state = {
        items: [
            {
                img: SummerGirl,
                date: 'March 12, 2020',
                title: 'The best Summer style from Milan Fashion Week',
                comments: 10,
                likes: 139,
                id: 1
            },
            {
                img: LondonGirl,
                date: 'March 12, 2020',
                title: 'Fashion Week London',
                comments: 6,
                likes: 50,
                id: 2
            },
            {
                img: ShowGirl,
                date: 'March 12, 2020',
                title: 'Fashion Show 2017',
                comments: 23,
                likes: 256,
                id: 3
            }
        ]       
    }

    handleNext(arr){
        const curArr = arr;
        const newArr = [...curArr.splice(1,2), ...curArr.splice(0,1)]
        this.setState({
            items: newArr
        })
    }

    handlePrev(arr){
        const curArr = arr;
        const newArr = [...curArr.splice(2,1), ...curArr.splice(0,2)]        
        this.setState({
            items: newArr
        })
    }

    render() {

        const {items} = this.state;

        return (
            <section className="popular">
                <div className="container">

                    <div className="popular-wrapper">

                        <div className="popular-number-of-day">
                            <img src={NumberOfDay} alt="cover" className="popular-number-of-day-cover"/>
                            <h3 className="popular-number-of-day-title">Number of Day</h3>
                            <div className="popular-number-of-day-main">
                                <span className="popular-number-of-day-main-number">197</span>
                                <span className="popular-number-of-day-main-info">Combo Sale Off Up To 50%</span>
                            </div>
                            <a href="#" className="popular-number-of-day-readmore">Read More</a>
                        </div>

                        <div className="popular-carousel">
                            <div className="popular-carousel-header">
                                <div className="popular-carousel-header-title">Popular </div>
                                <div className="popular-carousel-header-nav">
                                    <button
                                    onClick={() => this.handlePrev(items)} 
                                    className="popular-carousel-header-nav-prev">                                        
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                                            class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor"
                                                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button
                                    onClick={() => this.handleNext(items)} 
                                    className="popular-carousel-header-nav-next">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                                            class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor"
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="popular-carousel-body">

                                <div className="popular-carousel-body-showcase">
                                    <PopularItem
                                    items={items[0]}                                    
                                    />
                                </div>
                                <div className="popular-carousel-body-controls">
                                    <div className="popular-carousel-body-controls-tabs">
                                        {
                                            items.slice(1).map(item => {
                                                return (
                                                    <PopularItem
                                                    items={item}                                                    
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                        <a href="#" className="popular-carousel-body-controls-showmore">
                                            View All
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right"
                                                class="svg-inline--fa fa-long-arrow-alt-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512">
                                                <path fill="currentColor"
                                                    d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z">
                                                </path>
                                            </svg>
                                        </a>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </section>
        )
    }
}
