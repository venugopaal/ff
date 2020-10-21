import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import InsertData from './components/insertData/insertData';
import Item from "./components/items/item";
import Header from "./components/header/header";

import Example from './components/int';

function App() {
  return (
    <div className="App">

     <Router>
     <Route  path="/" component={Header} />
     <Switch>
     <Route exact path="/home"  component={Home}>

     </Route>
     <Route path="/cv" component={InsertData}>

     </Route>
     

     <Route path="/ex" component={Example}></Route>
     <Route path="/item/:itemId" component={Item} />

     </Switch>
     </Router>





    </div>
  );
}

export default App;
