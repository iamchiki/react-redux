import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const middleWares = [reduxThunk];

const store = createStore(rootreducer, applyMiddleware(...middleWares));
