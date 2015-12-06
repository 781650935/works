import { combineReducers } from 'redux';

import { SELECT_REDDIT, INVALIDATE_REDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

function selectedReddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_REDDIT:
            return action.reddit;
        default:
            return state
    }
};

function posts(state = {isFetching: false, didInvalidate: false, items: []}, action) {
    switch (action.type) {
        case INVALIDATE_REDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            var _test = Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
            console.log(_test);
            return _test;
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
};

function postsByReddit(state = {}, action) {
    console.log(state, action);
    switch (action.type) {
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            var _test = Object.assign({}, state, {
                [action.reddit]: posts(state[action.reddit], action) //action.reddit = 'reactjs'
            });
            return _test;
        default:
            return state
    }
};

const rootReducer = combineReducers({
    postsByReddit: postsByReddit,
    selectedReddit: selectedReddit
});

export default rootReducer;
