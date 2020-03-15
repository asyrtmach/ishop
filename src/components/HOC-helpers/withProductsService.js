import React from 'react';

import {IShopConsumer} from '../context';

const withProductsService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (
      <IShopConsumer>
        {
          (productsService) => {
            const serviceProps = mapMethodsToProps(productsService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </IShopConsumer>
    );
  }
};

export default withProductsService;