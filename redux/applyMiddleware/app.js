/**
 * Created by Rayr Lee on 2015/11/27.
 */

import { createStore, applyMiddleware } from 'redux';
import todos from './reducers';

function logger({ getState }) {
    return (next) => (action) => {
        console.log('will dispatch', action);

        let returnValue = next(action);
        console.log('state after dispatch', getState());
        return returnValue;
    };
}

let createStoreWithMiddleware = applyMiddleware(logger)(createStore);
let store = createStoreWithMiddleware(todos, ['Use Redux']);

store.dispatch({
    type: 'ADD_TODO',
    text: 'Understand the middleware'
});