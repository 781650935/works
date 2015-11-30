import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

function logger({ getState }){
    return function (next) {
        return function (action) {
            console.log('will dispatch', action);

            // 调用 middleware 链中下一个 middleware 的 dispatch。
            let returnValue = next(action);

            console.log('state after dispatch', getState());

            // 一般会是 action 本身，除非
            // 后面的 middleware 修改了它。
            return returnValue;
        }
    }
}

let createStoreWithMiddleware = applyMiddleware(logger)(createStore);

// 什么是reducers
// 对照flux对应的demo,也就是todoStores中,
// 通过AppDispatcher.register注册了一个函数,这个函数的目的就是接收来自todoAction的行为来更新store;
// reducer实际就是register函数内部的部分;随着业务的增加,这部分内容势必增加;
export default function configureStore(initialState) {
    //initialState为初始化值;
    const store = createStoreWithMiddleware(rootReducer, initialState);
    //也就是创建flux中的todoStore;

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
