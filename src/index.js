import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import './bootstrap.min.css'; 
import './fontawesome.min.css';
import Usa from './usa/usapage';
import Vatby from './vatby/vatby';
import Login from './login/login';
import Prody from './prody/prodypage';
import Expense from './expense/expypage';
import Cusmy from './cusmy/cusmypage';
import Das from './das/daspage';

const routing = (
  <Router>
    <Route exact path="/" component={Login}/>
    <Route path="/usapage" component={Usa}/>
    <Route path="/vatby" component={Vatby}/>
    <Route path="/prodypage" component={Prody}/>
    <Route path="/cusmypage" component={Cusmy}/>
    <Route path="/daspage" component={Das}/>
    <Route path="/expypage" component={Expense}/>
  
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


//http://create-react-app.dev