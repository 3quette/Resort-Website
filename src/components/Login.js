import React, { Component } from 'react';
import './App.css';
export class Login extends Component {
    
    state={
        isOpen:false
    }     
form=()=>(
    <div style={{position:'fixed',backgroundColor:'rgba(0,0,0,0.6)',paddingTop:'100%',paddingBottom:'20%',paddingRight:'100%',zIndex:'200'}} >
    <div id='login_form'>
    <div id='form_header'>
    <div><strong >Sign in:</strong></div>
    <button id='closebutton' style={{marginLeft:'200px'}}  onClick={()=>{this.setState({isOpen:false})}}>&times;</button>
    </div>
    <table>
        <tr>
            <td>Name:</td>
            <td><input type='text' placeholder='Enter your name'></input></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><input type='email' placeholder='Enter e-mail address'></input></td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input type='password' placeholder='Enter your password'></input></td>
        </tr>
    </table>
    <button id='donebutton' style={{marginTop:'20px'}} type='submit' onClick={()=>{this.setState({isOpen:false})}}>Done</button>   
</div>
</div>

)   
changeState
    render() {
        return (
            <div>
              <button id='signin_button' onClick={()=>{this.setState({isOpen:true})}}>Sign in</button>          
              {this.state.isOpen? this.form():""}
            </div>
        )
    }
}

export default Login
