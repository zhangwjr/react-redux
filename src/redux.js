let  createStore = (reducer)=>{
    let state;//默认是undefined
    let linsteners = [];

    let getState = ()=>state;
    //订阅
    let subscribe = (listener)=>{
        linsteners.push(listener);
        return ()=>{
            linsteners.filter(l=>l!==listener)
        }
    };
    //分发
    let dispatch = (action)=>{
        state = reducer(state,action);
        linsteners.forEach(item=>item())
    };
    dispatch();
    return {
        getState,
        subscribe,
        dispatch
    }

};
//应用中间件  对createStore的增强
let applyMiddleware = middleware => createStore => reducer =>{
    let store = createStore(reducer);
    middleware = middleware(store);
    let dispatch = middleware(store.dispatch);
    return {
        ...store,
        dispatch
    }
}

export {
    createStore,
    applyMiddleware
}