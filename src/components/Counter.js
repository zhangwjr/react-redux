import React, { Component } from 'react';
import {
    createStore
} from '../redux';
const initialState = 0;
// reducer纯函数
let reducer = (state = initialState, action) => {
    console.log('prevState = ' + state, 'action = ' + action)
    if (action) {
        switch (action.type) {
            case 'ADD':
                return state + 1;
                break;
            case 'SUB':
                return state - 1;
                break;
            default:
                return state;
        }
    } else {
        return state;
    }
};

let store = createStore(reducer);

class Counter extends Component {
    constructor() {
        super()
        this.state = store.getState();
    }
    componentWillMount() {
        let unsubscribe = store.subscribe(() => {
            this.setState({
                state: store.getState()
            })
        })
        unsubscribe()
    }
    cancel() {

    }
    addHandleClick() {
        store.dispatch({
            type: 'ADD'
        })
    }
    render() {
        /* 
            Action是把数据从引用传到store的有效载荷，它是store数据的唯一来源，
            一般来说我们是通过store.dispatch()将action传到store。
            总结为，state的改变只能通过action来改变。
            let reducer = ()=>{};
            let store = createStore(reducer);
            store.dispacth({type:'ADD'});
            store.subscribe(()=>{});
        */
        return (
            <div>
                <p>Redux版本: {store.getState()}</p>
                <button onClick={this.addHandleClick}>增加</button>
                <button onClick={
                    () => store.dispatch({
                        type: 'SUB'
                    })
                }>减少</button>
                <button onClick={this.cancel}>取消</button>
            </div>
        )
    }

}
export default Counter;