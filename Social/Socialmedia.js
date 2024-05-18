import React  from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export const socialmedia = () => {
  return (
    <div className='all-home'>
   
        <Link to="https://www.facebook.com/ashishgtm6969/">  <FontAwesomeIcon icon={faFacebook} className='iconfacebook'/></Link>
        <Link to="https://www.instagram.com/ashishgtm/"><FontAwesomeIcon icon={faInstagram} className='iconinsta' /></Link>
        <Link to="/"> <FontAwesomeIcon icon={faYoutube} className='iconyoutube' /></Link>
        <Link to="/"> <FontAwesomeIcon icon={faLinkedin} className='iconlinkedin' /></Link>
      
            </div> 
  )
}
export default socialmedia;