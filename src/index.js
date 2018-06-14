import React from 'react';
import ReactDOM from 'react-dom';
//import Counter from "./Counter";
import {createStore,applyMiddleware} from "./redux";

let count = (state=0,action)=>{
    if(action){
        switch (action.type){
            case 'ADD':
                return state + 1;
                break;
            case 'SUB':
                return state - 1;
                break;
            default:
                return state;
        }
    }else{
        return state;
    }
};

let logger = store => next => action =>{
    console.log('before',store.getState())
    console.log(action);
    next(action);
    console.log('after',store.getState())
}

let store = applyMiddleware(logger)(createStore)(count);
store.dispatch({type:'ADD'});
store.dispatch({type:'SUB'});


//ReactDOM.render(<Counter/>, document.getElementById('root'));


