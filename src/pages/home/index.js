import React, { Component } from 'react';

import Header from '../../components/header';
import Features from '../../components/features';
import Products from '../../components/products';
import Events from '../../components/events';
import Novelties from '../../components/novelties';
import Popular from '../../components/popular';
import Brands from '../../components/brands';
import Footer from '../../components/footer';
import ErrorBoundry from '../../components/errorBoundry';


export default class HomePage extends Component {
    render() {
        return (
        <ErrorBoundry>
            <Header/>
            <Features/>
            <Products/>
            <Events/>
            <Novelties/>
            <Popular/>
            <Brands/>
            <Footer/>
        </ErrorBoundry>
        )
    }
}
