import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();


import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

ReactDOM.render(
<Router history={history}>
    <div>
        <Route  path="/" component={Main} />
        <Route  exact path="/" component={Weather} />
        <Route  path="/about" component={About} />
        <Route  path="/examples" component={Examples} />
    </div>
</Router>,

 document.getElementById('app') )
