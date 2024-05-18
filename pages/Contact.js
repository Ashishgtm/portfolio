import React from 'react'
import Header from '../components/Header/Header'
import '../assests/css/Contact.css'

function Contact ()
{
  document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});


  return (
    <div className='all-contact'>
<div class="custom-cursor">
    <div class="circle">
        <div class="dot"></div>
    </div>
</div>
        <Header />
    </div>
  )
}
export default Contact;
