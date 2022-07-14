import React, { Component } from 'react'
import SwiftSlider from 'react-swift-slider'

export class Slider extends Component {
    render() {
       const data =[
            {'id':'1','src':'https://images8.alphacoders.com/541/541025.jpg'},
            {'id':'2','src':'https://www.chinesetouristagency.com/wp-content/uploads/2020/06/Atmosphere-Resorts-Spa-Luxury-Resort.jpg'},
            {'id':'3','src':'https://wallpapercave.com/wp/wp1874159.jpg'},
            {'id':'4','src':'https://i.pinimg.com/originals/4a/8f/e3/4a8fe38254eec40c2876c149399f8126.jpg'}
          ];
        return (
            <div style={{marginTop:'10px'}}>
            <div id='slider_txt1'><p>Scarlett Inn Hotels & Resorts is a collection of luxury hotels in authentic<br></br> destinations
            across the Indian Ocean.Beautiful Mauritius, Magical<br></br> Maldives, True Seychelles &
            Authentic Madagascar.From luxurious glitz<br></br> to Robinson Crusoe-like escape, you
            will be whisked off to timeless<br></br> adventures in our hotels surrounded by a turquoise
            lagoon and genuine<br></br> personnel.<br></br><br></br>
            Scarlett Inn Belle Mare Plage Mauritius, Scarlett Inn
            Prince Maurice or<br></br> Scarlett Inn Lemuria Seychelles for your golfing holiday and
            you’ll have<br></br> an unforgettable experience.Perfect your Swing or Unleash your full<br></br>
            golfic potential at our Golf Academy.<br></br><br></br>
            Alluring coastlines ringed with soft white sand, crystalline water and<br></br> sunshine in 
            spades; you only have the world’s most romantic<br></br> destinations, hotels & resorts to
            choose from Indulge in your dreams<br></br> of a perfect wedding at one of the most
            romantic destinations in the world.<br></br><br></br>
            So put your feet up, let your hair down and enjoy a blissful trip<br></br> <u><i><em>in the lap of luxury!</em></i></u></p></div>  
           <SwiftSlider data={data} interval={3000} height={455}/>
            </div>
        )
    }
}
export default Slider
