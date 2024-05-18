import React from 'react'
import Header from '../components/Header/Header'
import '../assests/css/Work.css'
import Socialmedia from '../components/Social/Socialmedia';
import Clients from '../components/Workscom/Clients';
import { History } from '../components/Workscom/History';
import MyVideo from '../assests/video3.mp4';

function Work() 
 {
  document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

  return (
    <div className='all-work'>
 <div class="custom-cursor">
    <div class="circle">
        <div class="dot"></div>
    </div>
</div>


        <Header />

        <div className="container">
        <div className='experience1'><figcaption>Experience</figcaption></div>

        <div className="video-background">
        <video autoPlay muted loop>
        <source src={MyVideo} type="video/mp4" />
        </video>
        <div className="content-overlay">
        <div className='image-lefttext1'>
          <figcaption>Over <span className='two-words1'>a decade</span> of experience in interactive design and working with 
            some of the most talented people in business.</figcaption>
        
        </div>
        </div>
        </div>
      
        


        <div className='clients'>Clients</div>
        <div className='clienttext'>
          <figcaption> I worked with some of the most <span className='two-words1'>innovative</span> industry leaders to help
           build their top-notch products.</figcaption>
        </div>
        </div>
        
      
      
        <Clients />
        <History />
        <Socialmedia/>
    </div>
  )
}
export default Work;
