import React from 'react';

import Header from '../header';
import Features from '../features';
import Products from '../products';
import Events from '../events';
import Novelties from '../novelties';
import Popular from '../popular';
import Brands from '../brands';
import Footer from '../footer';
import ContextWrapper from '../contextWrapper';


import './app.sass';

const App = () => {
    return(
        <ContextWrapper>
            <Header/>
            <Features/>
            <Products/>
            <Events/>
            <Novelties/>
            <Popular/>
            <Brands/>
            <Footer/>
        </ContextWrapper>
    )
}

export default App;