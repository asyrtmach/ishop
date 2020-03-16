import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
// pages
import HomePage from '../../pages/home';
import CatalogPage from '../../pages/catalog';
import DetailsPage from '../../pages/details';
import {IShopProvider} from '../context';
import ProductsService from '../../services/productsService.js';
import ErrorBoundry from '../errorBoundry';

import store from '../../redux/store';

import './app.sass';

const App = () => {
    const productsService = new ProductsService();
    return(
        <Provider store={store}>
            <ErrorBoundry>
                <IShopProvider value={productsService}>
                    <Router>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/catalog" component={CatalogPage} exact/>
                        <Route path="/detail" component={DetailsPage} exact/>
                    </Router>
                </IShopProvider>  
            </ErrorBoundry> 
        </Provider>             
    )
}

export default App;