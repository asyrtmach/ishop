import React from 'react';

import Header from '../header';
import Features from '../features';
import Products from '../products';
import Events from '../events';
import Novelties from '../novelties';
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
        </ContextWrapper>
    )
}

export default App;