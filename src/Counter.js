import React from 'react';
import ReactDom,{Component} from 'react-dom';
import {createStore} from "./redux";

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

let store = createStore(count);


class Counter extends Component {
    constructor(){
        super()
        this.state = store.getState();
    }
    componentWillMount(){
        this.subscribe(()=>{
            this.setState({
                state:store.getState()
            })
        })
    }
    render(){
        return (
            <div>
                <p>{store.getState()}</p>
                <button onClick={()=>store.dispatch({type:'ADD'})}>加</button>
                <button onClick={()=>store.dispatch({type:'SUB'})}>减</button>
            </div>
        )
    }

}
export default Counter;