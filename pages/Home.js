import React  from 'react'

import '../assests/css/Home.css'
import Header from '../components/Header/Header'
import Socialmedia from '../components/Social/Socialmedia'

function Home()
{
 
  document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

  return (
    
    <div className='all-home'>


<div class="custom-cursor">
    <div class="circle">
        <div class="dot" onclick="handleDotClick()"></div>
    </div>
    
</div>
   <Header/>
 
   


       <img className='image1A' src='https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Ashish'/>
       <div className='images-right'>
          <figcaption>ASHISH GTM </figcaption>
        </div>


        <div className='images-right2' data-hover="HIDING">
          <figcaption>MAKING</figcaption>
        </div>



        <div className='images-right3'  data-hover3="NASTY">
          <figcaption>GOOD</figcaption>
        </div>
        <div className='images-right4'>
          <figcaption>SHIT</figcaption>
        </div>
        <div className='images-right5'>
          <figcaption>SINCE</figcaption>
        </div>
        <div className='images-right6'>
          <figcaption>2016</figcaption>
        </div>
      <Socialmedia/>

            </div>

  )
}
export default Home;

