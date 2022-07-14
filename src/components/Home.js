import React, { Component } from 'react';
import Slider from './Slider';

export class Home extends Component {
render() {
return (
<div> 
   <Slider/>
  <center><div id="welcome">
   <div id="welcome_head"><h1 id="caption">Welcome to Scarlett Inn</h1></div>
   <p class="home_para">Scarlet Inn is a luxurious exclusive recreational membership club for people to indulge in its first-rate amusement and luxuriating facilities. This prodigious recreational club is poised on 35 acres right in the heart of the city of lights, providing accessibility to everyone in the vicinity of Karachi.</p><br></br>
   <p class="home_para">Scarlet Inn assures that it enriches one’s social and community experience with innovative and off the grid recreational and amusement services and attractions. Scarlet Inn proudly boasts its wide variety of recreational and fun facilities which consists of Olympic grade swimming pools, Sports Marquee with an ample amount of indoor sports games, State-of-the-art gym with high-tech equipment and bona fide trainers, gaming zone with consoles, fine dine restaurant and coffee shops, lawn and banquets and much more.</p>  
</div>
  </center>
   <div id="family_resort">
   <h1 class="head"><i>Family Resort</i></h1>
   <p class="para"> <em> Scarlet Inn</em>, Hotel & Golf Course is a magnificent escape to one-of-a-kind getaway in <img class="home_pictures" src="https://media-cdn.tripadvisor.com/media/photo-s/07/b8/74/f2/affordable-family-resort.jpg" width="40%" height="300px" alt='img'/>Pakistan. <em> Scarlet Inn</em>  is a family resort in Karachi that provides attractions for all ages and offer guests with amenities of their choice including loads of family entertainment, artificial beach access, water recreation, dining, golf and a lot more.</p>
</div>
<div id="golf_course">
   <h1 class="head"><i>Golf Course</i></h1>
   <p class="para"> <em> Scarlet Inn</em> caters all the golfers with a lush green PGA Standard 18 Hole Floodlit Golf
   <img class="home_pictures" src="http://karachigolf.com.pk/img/kgc-1.jpg" width="40%" height="300px" alt='img'/> Course designed by an internationally renowned architect of Karachi, Mr. DR Surti. the increasing popularity of the sport,  <em> Scarlet Inn</em>provides all the golf enthusiasts a golf course inKarachi with a 72 par 18 holes floodlit, golf miniature, a full service Course house, a driving range as well as a fully equipped pro shop.</p> 
</div>
<div id="amusement">
   <h1 class="head"><i>225+ Amusements </i></h1>
   <p class="para"> <em> Scarlet Inn</em> embraces more than 225+ fantastic amusements for its members, guests and
   <img class="home_pictures" src="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/05/08/e7/top-10-amusement-parks-island-of-adventure.rend.hgtvcom.616.462.suffix/1491591683177.jpeg" width="40%" height="300px"alt='img'/> clients all under one roof. It is not only a unique place in Karachi with a variety of water slides, swimming pools, lakes for boating, artificial sea etc but also an exceptional amusement park with fabulous rides and slides.</p>
         </div>    
</div>
        )
    }
}

export default Home
