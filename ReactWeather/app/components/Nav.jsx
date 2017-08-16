import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

var Nav = () => {
    return (
        <div>
            <h2>Nav component</h2>
            <ul>
                <li><NavLink to="/" exact activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink></li>
                <li><NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
                <li><NavLink to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
            </ul>
        </div>
    );
};

export default Nav;