import {createStore, applyMiddleware, compose} from 'redux';
import combineReducers from "../reducers/reducers";
import Reactotron from '../utilities/ReactotronConfig'
import ReduxThunk from 'redux-thunk';

const middlewares = [];

const reactotronMiddleware = Reactotron.createEnhancer();
const thunk = applyMiddleware(ReduxThunk);
middlewares.push(reactotronMiddleware);
middlewares.push(thunk);

const store = createStore(combineReducers, compose(...middlewares));

export default store;