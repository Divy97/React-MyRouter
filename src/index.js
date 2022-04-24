import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, Switch, BrowserRouter, Routes} from 'react-router-dom'
import './index.css';
import App from './App';
import User from './User';
import Visit from './Visit';
import NotFound from './NotFound';

const routing = (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/visit">Visit</Link></li>
        <li><Link to="/User">User</Link></li>
      </ul>
    </div>
    <Routes>
       <Route exact path="/" element={<App />}/>
       <Route path="/visit" element={<Visit />}/>
       <Route path="/User" element={<User />}/>
       <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

