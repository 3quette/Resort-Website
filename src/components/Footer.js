import React, { Component } from 'react'

export class Footer extends Component {
render() {
 return (
  <div className='footerMainDiv'>
      <center>
        <div id='footer_logo'>
          <img src='https://www.freelogodesign.org/file/app/client/thumb/eedbf253-e70e-4691-b548-9595a0ae4731_200x200.png?1576585280141' alt='web logo' width='10%' height='10%'/>
           </div>
            <table className='footer_table' >
                <tr id='footer_heads'>
                    <th>Visit</th>
                    <th>About</th>
                    <th>Destinations</th>
                    <th>Professionals</th>
                    <th>Service</th>
                    <th>Follow us</th> 
                </tr>
                <tr id='footer_links'>
            <td> Find a Hotel<br/>
            Make a reservation<br/>
            Manage your reservation<br/>
            Find a meeting room<br/>
            Find a special offer<br/>
            Find a restaurant</td>
  
          <td>About us<br/>
              Development<br/>
              Best Rate Guarantee</td>
        
          <td>Europe<br/>
              Middle East<br/>
              Asia<br/>
              Africa </td> 
        
            <td>Press<br/>
               Careers <br/>                
               Travel professionals</td>
         
            <td>Imprint<br/>
                Privacy Policy<br/>
                Terms and Conditions of Use<br/>
                Contact<br/>
                Booking Terms & Conditions</td>
            <td>
               <a href="https://www.facebook.com/" target="blank"><img src="https://www.pngitem.com/pimgs/m/18-183391_facebook-icon-dark-free-vector-icons-facebook-circle.png" height="30px" width="30px;" alt="facebook logo"/></a>
               <a href="https://www.instagram.com/" target="blank"><img src="https://p7.hiclipart.com/preview/273/845/75/computer-icons-facebook-crosswinds-high-school-clip-art-black-instagram-icon.jpg" height="30px" width="30px;"alt="instagram logo"/></a>
               <a href="https://twitter.com/" target="blank"><img src="https://www.clipartkey.com/mpngs/m/198-1982823_twitter-logo-png-twitter-icon-red-circle.png" height="30px" width="30px;"alt="twitter logo"/></a>
               <a href="https://www.youtube.com/" target="blank"><img src="https://p7.hiclipart.com/preview/8/773/227/youtube-logo-computer-icons-youtube.jpg"height="30px" width="30px;"alt="youtube logo logo"/></a>
               <a href="https://pk.linkedin.com/" target="blank"><img src="https://icons-for-free.com/iconfiles/png/512/book+business+circle+contact+contacts+linkedin+icon-1320073242500496551.png" height="30px" width="30px;"alt="linkedin logo"/></a>
            </td>    
                </tr>
             </table>
            </center>
             <p id='rights'>©2020 All rights reserved Scarlet Inn . Privacy Policy</p>  
            </div>
        )
    }
}

export default Footer
