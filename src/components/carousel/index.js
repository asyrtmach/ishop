
import React, { Component } from 'react';
import Slider from 'react-slick';
 
export default class Carousel extends Component {
    render() {
        return (
            <Slider {... this.props}>
                {this.props.children}
            </Slider>
        );
    }
};