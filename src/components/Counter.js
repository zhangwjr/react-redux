import React, { Component } from 'react';
import {
    createStore
} from '../redux';

let count = (state = 0, action) => {
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

let store = createStore(count);

class Counter extends Component {
    constructor() {
        super()
        this.state = store.getState();
    }
    componentWillMount() {
        store.subscribe(() => {
            this.setState({
                state: store.getState()
            })
        })
    }
    render() {
        return (
            <div>
                <p>{store.getState()}</p>
                <button onClick={
                    () => store.dispatch({
                        type: 'ADD'
                    })
                }>增加</button>
                <button onClick={
                    () => store.dispatch({
                        type: 'SUB'
                    })
                }>减少</button>
            </div>
        )
    }

}
export default Counter;