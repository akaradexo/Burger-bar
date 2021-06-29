import './App.css';
import React, { Component } from 'react';
import {BrowserRouter ,Switch , Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cart from './component/Cart';
import Footer from './component/Footer';


class App extends Component {
    render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
