import isPlainObject from './utils/isPlainObject';
export var ActionTypes = {
    INIT: '@@redux/INIT'
};
export default function createStore(reducer, initialState) {
    if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
    }
    var currentReducer = reducer;
    var currentState = initialState;
    var listeners = [];
    var isDispatching = false;

    function getState() {
        return currentState;
    }

    function subscribe(listener) {
        listeners.push(listener);
        return function unsubscribe() {
            var index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }

    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
        }
        if (typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
        }
        if (isDispatching) {
            throw new Error('Reducers may not dispatch actions.');
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally {
            isDispatching = false;
        }
        //listeners.slice().forEach(listener => listener());
        listeners.slice().forEach(function (listener) {
            return listener();
        });
        return action;
    }

    function replaceReducer(nextReducer) {
        currentReducer = nextReducer;
        dispatch({
            type: ActionTypes.INIT
        });
    }
    dispatch({
        type: ActionTypes.INIT
    });
    return {
        dispatch,
        subscribe,
        getState,
        replaceReducer
    };
}

function thunkMiddleware({dispatch, getState}) {
    return function (next) {
        return function (action) {
            typeof action === 'function’' ? action(dispatch, getState) : next(action);
        }
    }
}



