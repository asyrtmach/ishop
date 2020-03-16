const initialState = {
  items: [],
  loading: true,
  error: null,
  cartItems: [],
  orderCount: 0,
  orderTotal: 0
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
      case 'FETCH_ITEMS_REQUEST':
        return {
          ...state,
          items: [],
          loading: true,
          error: null
        };

        case 'FETCH_ITEMS_SUCCESS':
          return {
            ...state,
            items: action.payload,
            loading: false,
            error: null
          };
    
        case 'FETCH_ITEMS_FAILURE':
          return {
            ...state,
            items: [],
            loading: false,
            error: action.payload
          };
    
        case 'ITEM_ADDED_TO_CART':
          const itemId = action.payload;
          const item = state.items.find((item) => item.id === itemId);
          const newItem = {
              "id":item.id,
              "img": item.img,
              "text": item.text,
              "type": item.type,
              "price": item.price,
              "sale": item.sale,
              "count": "1"
          };
          console.log(newItem)
          return {
            ...state,
            cartItems: [
              ...state.cartItems,
              newItem
            ]
          };
    
        default:
          return state;      
    }
  };
  
  export default reducer;
