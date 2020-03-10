import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer =(props)=>{

	const history = useHistory()

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	const currentYear = new Date().getFullYear()
	return(
		<div className='footer'>
			<div className='footer__name'>
				<div className='footer__name--logo' onClick={()=>history.push('/')}>
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
					<Link to='/contact'><li>{checkLang('Contact', 'Contact')}</li></Link>
					<Link to='/contact'><li>{checkLang('Payment options', 'Betaalmogelijkheiden')}</li></Link>
					<Link to='/'><li>{checkLang('Shipping', 'Verzending & levering')}</li></Link>
				</ul>
			</div>
			<div className='footer__list footer__legal'>
				<ul>
					<Link to='/contact'><li>{checkLang('About Us', 'Over Ons')}</li></Link>
					<Link to='/contact'><li>{checkLang('Privacy Policy', 'Privacy Policy')}</li></Link>
					<Link to='/'><li>{checkLang('Cookies', 'Cookies')}</li></Link>
				</ul>
			</div>

			<div className='footer__copyright'>
				<p>&copy; {currentYear} Michal Antczak. All rights reserved.</p>
			</div>
		</div>
		)
}

export default Footer