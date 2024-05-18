import React from 'react';

import '../assests/css/About.css'
import Header from '../components/Header/Header'
import Whatido from '../components/Aboutscom/Whatido';
import Socialmedia from '../components/Social/Socialmedia';
import Secondsection from '../components/Aboutscom/Secondsection';

function About() 
{
  document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

  return (
    <div className='all-about'>
<div class="custom-cursor">
    <div class="circle">
        <div class="dot"></div>
    </div>
</div>


    <Header/>
    
    <div className='aboutme'>About Me</div>
    <div className='description'>
        I'm a <span className='two-words'>selectively skilled</span> product designer with strong focus on producing high quality & 
        impactful digital experience.
    </div>
      <Secondsection/>
      <Whatido/>
      <Socialmedia/>

 </div>
  )
}
export default About;