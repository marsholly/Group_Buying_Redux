import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const middlewares = [thunk, promise()];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
