import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ErrorBoundry from '../../components/errorBoundry';

import { compose, withProductsService } from '../../components/HOC-helpers';
import { getDetailedItem } from '../../redux/actions/cartActions.js';



class DetailsPage extends Component {
       
    componentDidMount(){
        const { match:{params:{id}}, getDetailedItem } = this.props; 
        return getDetailedItem(id);
    }
    
    render(){
        const {items, history, match:{id} } = this.props;       
        return (
            <ErrorBoundry>
                <Header/>
                <div>                               
                    {
                        items.map(item => {
                            return (
                            <div>
                                <div>{item.id}</div>
                                <div>{item.img}</div>
                                <div>{item.text}</div>
                                <div>{item.type}</div>
                                <div>{item.sale}</div>
                                <div>{item.popular}</div>
                                <div>{item.banner}</div>
                                <div>{item.price}</div>
                                <div>{item.size}</div>
                                <div>{item.color}</div> 
                            </div>                         
                            )
                        })
                    }
                </div>
                <Footer/>
            </ErrorBoundry>
        ); 
    }
} 

const mapStateToProps = ({ items, loading, error, cartItems }) => {
    return { items, loading, error, cartItems };
  };


const mapDispatchToProps = (dispatch, { productsService }) => {
    return {
        getDetailedItem: getDetailedItem(productsService, dispatch)      
    };
  }; 

export default compose(
    withProductsService(),    
    connect(mapStateToProps, mapDispatchToProps)    
    )(withRouter(DetailsPage)) ;