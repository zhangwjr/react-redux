import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Counter from './components/Counter'
import DemoApp from './components/Counter_Redux'

let Home = () => <div>Home</div>;
let Profile = () => <div>Profile</div>;
let User = () => <div>User</div>;

ReactDOM.render(<HashRouter>
    <div>
        <Route path='/' component={Counter} />
        <Route path='/demo' component={DemoApp} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/user' component={User} />
    </div>
</HashRouter>, document.getElementById('root'));


