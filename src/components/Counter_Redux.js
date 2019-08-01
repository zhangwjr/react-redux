import React, {
  Component
} from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
// 1.action types
const COUNTER_ADD = 'counter_add';
const COUNTER_DEC = 'counter_dec';

const initialState = { a: 0 };
// 2.reducers
function reducers(state = initialState, action) {
  switch (action.type) {
    case COUNTER_ADD:
      return { ...state, a: state.a + 1 }
      break;
    case COUNTER_DEC:
      return { ...state, a: state.a - 1 }
      break;
    default:
      return state;
  }
}

// 3.action creator
const incA = () => ({ type: COUNTER_ADD });
const decB = () => ({ type: COUNTER_DEC });
const Actions = { incA, decB };

class AA extends Component {
  render() {
    const { store, actions } = this.props;
    return (
      <div>
        <p>a = {store.a}</p>
        <p>
          <button onClick={actions.incA}>增加</button>
          <button onClick={actions.decB}>减少</button>
        </p>
      </div>
    )
  }
}

// 4.将state、actions映射到组件 props
const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({
  // 5.bindActionCreators 简化 dispatch
  actions: bindActionCreators(Actions, dispatch)
});

// 6.connect产生容器组件
const Count = connect(mapStateToProps, mapDispatchToProps)(AA);

const store = createStore(reducers);

export default class DemoAA extends Component {
  render() {
    return (
      <Provider store={store}>
        <Count />
      </Provider>
    )
  }
}
