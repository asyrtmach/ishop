import React from 'react';

import Header from '../header';
import Features from '../features';
import Products from '../products';
import Events from '../events';
import Novelties from '../novelties';
import Popular from '../popular';
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
        </ContextWrapper>
    )
}

export default App;