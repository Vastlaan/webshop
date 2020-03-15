import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import {Products} from '../data/Products'


const Footer =(props)=>{

	const history = useHistory()

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	const currentYear = new Date().getFullYear()

	// const createProducts = () =>{
	// 	fetch('/auth/createProducts')
	// 	.then(res=>res.json())
	// 	.then(data=>console.log(data))
	// 	.catch(e=>console.error(e))
	// }
	// const createClients = () =>{
	// 	fetch('/auth/createClients')
	// 	.then(res=>res.json())
	// 	.then(data=>console.log(data))
	// 	.catch(e=>console.error(e))
	// }
	// const addProducts = () =>{
	// 	Products.map(prod=>{
	// 		fetch('/auth/addProducts', {
	// 			method:'POST',
	// 			headers:{
	// 				'Content-Type':'application/json'
	// 			},
	// 			body: JSON.stringify(prod)
	// 		})
	// 		.then(res=>res.json())
	// 		.then(data=>console.log(data))
	// 		.catch(e=>console.error(e))
	// 	})
		
	//}
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
					<Link to='/contact'><li>{checkLang('Shipping', 'Verzending & levering')}</li></Link>
				</ul>
			</div>
			<div className='footer__list footer__legal'>
				<ul>
					<Link to='/contact'><li>{checkLang('About Us', 'Over Ons')}</li></Link>
					<Link to='/contact'><li>{checkLang('Privacy Policy', 'Privacy Policy')}</li></Link>
					<Link to='/contact'><li>{checkLang('Cookies', 'Cookies')}</li></Link>
					{
						// <a onClick={()=>{
						// 	addProducts()
						// 	return console.log('done')
						// }
						// } >CP</a>
					}
				</ul>
			</div>

			<div className='footer__copyright'>
				<p>&copy; {currentYear} Michal Antczak. All rights reserved.</p>
			</div>
		</div>
		)
}

export default Footer