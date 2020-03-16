import React from 'react';

import {IShopConsumer} from '../context';

const withProductsService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (
      <IShopConsumer>
        {
          (productsService) => {            
            return (
              <Wrapped {...props} productsService={productsService} />
            );
          }
        }
      </IShopConsumer>
    );
  }
};

export default withProductsService;