
const itemsRequested = () => {
  return {
    type: 'FETCH_ITEMS_REQUEST'
  }
};

const itemsLoaded = (items) => {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: items
  };
};

const itemsError = (error) => {
  return {
    type: 'FETCH_ITEMS_FAILURE',
    payload: error
  };
};

const itemAddedToCart = (itemId) => {
  return {
    type: 'ITEM_ADDED_TO_CART',
    payload: itemId
  };
};

const fetchItems = (productsService, dispatch) => () => {
  dispatch(itemsRequested());
  productsService.initialLoad()
  .then((data) => dispatch(itemsLoaded(data)))
  .catch((err) => dispatch(itemsError(err)));
}

export {
  fetchItems,
  itemAddedToCart
};