const initialState = {
  items: [],
  loading: true,
  error: null,
  cartItems: [],
  currentCartPage: 0,
  orderCount: 0,
  orderTotal: 0,
  cartVisible: false
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
    
        case 'ADD_ITEM_TO_CART_ITEMS':
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
          return {
            ...state,
            cartItems: [
              ...state.cartItems,
              newItem
            ]
          };
          case 'UPDATE_CART_ITEMS':
          return {
            ...state,
            cartItems: [
              ...action.payload
            ]            
          };  
          case 'HANDLE_CART_PAGE':
          return {
            ...state,
            currentCartPage: action.payload
          };
          case 'TOGGLE_CART':
            return {
              ...state,
              cartVisible: action.payload
            }
    
        default:
          return state;      
    }
  };
  
  export default reducer;
