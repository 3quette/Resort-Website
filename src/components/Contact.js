import React, { Component } from 'react';

export class Contact extends Component {
    render() {
        return (
            <div className='contact'>
            <div id='map' >
            <iframe title='location' src="https://www.google.com/maps/d/embed?mid=1z_ZA7fNIA6QdBcLxeCV6jAI2bkUofPbQ" width="90%" height="300"/>
            </div>  
            <center><table id='contact_content'>
            <caption className='contact_us_heading'>Contact us</caption>
        <tr>
            <th><img src='https://png.pngtree.com/svg/20170418/delivery_address_322430.png'alt="address_icon" width="10%" height="10%"/></th>
            <th><img src="https://cdn1.iconfinder.com/data/icons/mixicons-1/500/iphone-512.png"alt="phone_icon" width="15%" height="15%"/></th>
         	<th><img src="https://cdn1.iconfinder.com/data/icons/rafif-rounded-glyph-vol-1/512/vol.1_envelope-512.png"alt="email_icon" width="10%" height="10%"/></th>
        </tr>
        <tr  id='headings'>
            <th>Address</th>
            <th>Phone</th>
            <th>E-mail</th>
        </tr>
        <tr id='contact_info'>
            <th>22-E, Block-6, P.E.C.H.S.,<br/>Karachi-75400, Sindh-Pakistan</th>
         	<th><strong>Tel: </strong>021-111-87-87-87,<br/>
            34311325-6,34543321-25<br/><strong>Cell: </strong>0333-0208712–4</th>
         	<th><strong>Fax: </strong>92-21-3431-1327<br/><strong>Email: </strong> info@scarletInn.com</th>
        </tr>
            </table></center>
</div>//main div
        )
    }
}

export default Contact
