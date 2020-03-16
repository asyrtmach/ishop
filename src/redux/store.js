import { createStore } from 'redux';

import reducer from './reducers/cart.js';

const store = createStore(reducer);

export default store;
