import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import API from './components/API';
import Dining from './components/Dining';
import {Switch,Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <Popup/>
                <Header/>
                <NavBar/> 
                <Switch>
                <Route  path='/'  exact component={Home}></Route>
                <Route  path='/Contact' component={Contact}></Route>
                <Route  path='/About' component={About}></Route>
                <Route  path='/Api' component={API}></Route>
                <Route  path='/Dining' component={Dining}></Route>
                </Switch>
                <Footer/>
            </div>
        )
    }
}
