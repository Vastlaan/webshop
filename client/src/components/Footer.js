import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer =(props)=>{

	return(
		<div className='footer'>
			<div className='footer__name'>
				<div className='footer__name--logo' onClick={()=>window.location.href='/'}>
					<h1>Claire Hempbury</h1>
					<h2>outstanding fashion</h2>
					<ul className='footer__name--logo-social'>
						<li><FaFacebook/></li>
						<li><FaTwitter/></li>
						<li><FaLinkedinIn/></li>
						<li><FaInstagram/></li>
					</ul>
				</div>
			</div>
			<div className='footer__list footer__service'>
				<ul>
					<a href='/contact'><li>Contact</li></a>
					<a href='/contact'><li>Betaalmogelijkheiden</li></a>
					<a href='/'><li>Verzending & levering</li></a>
				</ul>
			</div>
			<div className='footer__list footer__legal'>
				<ul>
					<a href='/contact'><li>Over Ons</li></a>
					<a href='/contact'><li>Privacy Policy</li></a>
					<a href='/'><li>Cookies</li></a>
				</ul>
			</div>

			<div className='footer__copyright'>
				<p>&copy; 2020 Michal Antczak. All rights reserved.</p>
			</div>
		</div>
		)
}

export default Footer