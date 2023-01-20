import React from 'react';
import {MdMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import './footer.css'

import logo from '../../images/logo.png'

const Footer = () => {
    return (
<footer>
<div className='instruction'>
    <small>⬆⬆ <em>Click on </em>"Give Me advice!!" ⬆⬆</small>
</div>
<div className='logo'>
    <img src={logo} alt='logo'></img>
</div>
<div className='socials'>
    <a href='mailto:meetashishpatel99@gmail.com' className='mail'><MdMail/></a>
    <a href='https://www.linkedin.com/in/meet-code/' className='linkedin'><BsLinkedin/></a>
    <a  href='https://meet-patel.netlify.app' className='portfolio'><FaUserAlt/></a>

</div>
<div className='footer__copyright'>
      <small>&copy;Handcrafted by Meet Patel</small>
</div>
</footer>
)
}

export default Footer