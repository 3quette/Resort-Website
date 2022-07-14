import React, { Component } from 'react'
import './App.css';

export class Header extends Component {
//RENDER    
render() {
  return (
    <div className='header-div'>
    <img className='logo' src='https://www.freelogodesign.org/file/app/client/thumb/eedbf253-e70e-4691-b548-9595a0ae4731_200x200.png?1576585280141' alt='web logo'/>
    <p className='slogan'>Enjoy our Vacations in the lap of <i>Luxury!</i></p>
    </div>
        )//return
    }//render
}//class

export default Header
