import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css'
import Login from './Login';

export class NavBar extends Component {
    render() {
        return (
            <div>
            <nav><ul className='Navigation-Bar'>
                 <Link to='/'>
                 <li className='navbar-items'>Home</li>
                 </Link>
                 <Link>
                 <li className='navbar-items'>Reservations</li>
                 </Link>
                 <Link to='/Dining'>
                 <li className='navbar-items'>Dining </li>
                 </Link>
                 <Link to='/Api'>
                 <li className='navbar-items'>Api</li>
                 </Link>
                 <Link>
                 <li className='navbar-items'>Gallery</li>
                 </Link>
                 <Link to='/Contact'>
                 <li className='navbar-items'>Contact us</li>
                 </Link>
                 <Link to='/About'>
                 <li className='navbar-items'>About us</li>
                 </Link>
                 <li><Login/></li>
             </ul></nav>
            </div>
        )//return
    }//render
}//class

export default NavBar
