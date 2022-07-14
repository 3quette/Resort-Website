import React, { Component } from 'react';
export class API extends Component {
 state={
   loading: true,
   person:null  
 };
async componentDidMount(){
    const url='https://api.randomuser.me/';
    const response= await fetch(url);
    const data= await response.json();
    this.setState({person: data.results[0],loading:false});
 }

render() {
 return (
  <div>
   <div className="contact_us_heading"><h1 id="caption">API</h1></div>
    {this.state.loading || !this.state.person ?(
     <div>loading...</div>)
     :(
      <div id='family_resort'>
       <p class="para"><b>Name</b>: {this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}<br></br>
       <b>Gender</b>: {this.state.person.gender}<br></br>
       <b>City</b>: {this.state.person.location.city}<br></br>
       <img src={this.state.person.picture.large} alt='img'></img><br></br>
       <b>Phone</b>: {this.state.person.phone}</p>
    </div>
)}
</div>           
        )
    }
}

export default API
