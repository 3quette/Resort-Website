import React, { Component } from 'react'

export class Popup extends Component {
    state={
        isOpen: false
    }
condition=()=>(
    <div style={{position:'fixed',backgroundColor:'rgba(0,0,0,0.6)',paddingTop:'100%',paddingBottom:'20%',paddingRight:'100%',zIndex:'200'}} >
    <div id='popup'>
    <button id='closebutton' style={{marginLeft:'200px'}}  onClick={()=>{this.setState({isOpen:false})}}>&times;</button>
    <center><h1 style={{marginLeft:'200px',stroke:'#ffffff solid'}}>Our Exclusive Discount Offers!</h1></center>
    <table>
        <tr>
        <th>
    <div id="popup_img">
    <img style={{position:'relative'}}src="https://r-cf.bstatic.com/images/hotel/max1024x768/219/219520694.jpg"width="500px" alt='pop'/>
        <div id="popup_price">
       <center> <h3><del>Rs.50,000</del></h3>
  	        <h3>Rs.45,000</h3></center>
        </div>
      </div>
      </th>
      <th>
      <div id="popup_img2">
      <img  style={{position:'relative'}}src="https://specials-images.forbesimg.com/imageserve/5d0aa35c4c687b00085a21d9/960x0.jpg?fit=scale" alt='pop'  width="500px"/> 
        <div id="popup_price">
       <center> <h3><del>Rs.50,000</del></h3>
  	        <h3>Rs.45,000</h3></center>
        </div>
      </div>
      </th>
      </tr>
      </table>
    </div>
    </div>
)
componentDidMount(){
    setTimeout(()=>{
        this.setState({isOpen:true})},
            6000)
}
    render() {
        return (
            <div>
            {this.state.isOpen? this.condition(): ""}
           </div>
        )
    }
}

export default Popup
