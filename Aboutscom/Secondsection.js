import React from 'react';
import image from './aboutimage1.png';
import './acss/secondsection.css'
function Secondsection() 
{
  
  return (
    <div className='all-about'>
   
   <div className="container">
   
         <img src={image} alt="Ashish" className="image-one" />

             <div className='aboutme2'>
              <figcaption>I'm  <span className='two-words'>Ashish.</span>
            <div>A Web Designer</div></figcaption> 
            
            </div>
        <div className='aboutme3'>
            <figcaption>The cusp of art and technology has always fascinated me and I've never been
            afraid to just jump in and give it a go, whether it's Paint, Photoshop, Sketch or CSS. 
             I’ve been designing with computers since the day I first opened Microsoft Paint.
            <div>
           
            Fast forward to 2023 and I’ve tried it all, from Digital Campaign Design and Flash 
            Actionscript to Web Design, Animation, HTML/CSS, No-Code Web Development, Product Design 
            and Product Management. Everything I have done, small or big, has been a vital stepping
            stone for where I am today and it is important.
            </div>
            <div>
             What excites me most about being a Product Designer is being able to design and create things 
             that have purpose and solve real problems. It goes beyond designing buttons and websites and
              involves having a passion for designing experiences and solutions that help people, whether it's helping them make better videos,
              market themselves online, or buy something online. </div>
        <div>
        Leaning into customer insight and understanding their needs, finding the right problems to solve,
         delivering solutions as quickly as possible, learning from those and then iterating and improving 
         that value over time is the key to great product design.
        </div>
       
        </figcaption>
        </div>
       

    </div>
    </div>
      
  )
}
export default Secondsection;