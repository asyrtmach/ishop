import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// pages
import HomePage from '../../pages/home';
import CatalogPage from '../../pages/catalog';
import DetailsPage from '../../pages/details';

import './app.sass';

const App = () => {
    return(
        <Router>
            <Route path="/" component={HomePage} exact/>
            <Route path="/catalog" component={CatalogPage} exact/>
            <Route path="/detail" component={DetailsPage} exact/>
        </Router>
    )
}

export default App;