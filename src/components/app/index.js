import React from 'react';

import Header from '../header';
import Features from '../features';
import Products from '../products';
import ContextWrapper from '../contextWrapper';


import './app.sass';

const App = () => {
    return(
        <ContextWrapper>
            <Header/>
            <Features/>
            <Products/>
        </ContextWrapper>
    )
}

export default App;