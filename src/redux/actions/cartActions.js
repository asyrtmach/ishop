
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

const itemAddedToCart = (id) => {
  return {
    type: 'ADD_ITEM_TO_CART_ITEMS',
    payload: id
  };
};

const updateCart = (items) => {
  return {
    type: 'UPDATE_CART_ITEMS',
    payload: items
  };
};

const handleCartPage = (id) => {
  return {
    type: 'HANDLE_CART_PAGE',
    payload: id
  }
}

const toggleCart = (cartVisible) => {
  return {
    type: 'TOGGLE_CART',
    payload: cartVisible
  }
}

const fetchItems = (productsService, dispatch) => () => {
  dispatch(itemsRequested());
  productsService.initialLoad()
  .then((data) => dispatch(itemsLoaded(data)))
  .catch((err) => dispatch(itemsError(err)));
}

const loadMore = (productsService, dispatch) => (arr) => {
  dispatch(itemsRequested());
  productsService.loadMore(arr)
  .then((data) => dispatch(itemsLoaded(data)))
  .catch((err) => dispatch(itemsError(err)));
}

export {
  fetchItems,
  itemsLoaded,
  loadMore,
  itemAddedToCart,
  handleCartPage,
  updateCart,
  toggleCart
};