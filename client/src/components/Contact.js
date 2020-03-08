import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const Contact = (props) =>{

	const history = useHistory()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [warning, setWarning] = useState('')

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	const sendContactForm =(e)=>{
		e.preventDefault()
		if(!email || !message){
			return setWarning('Fields EMAIL and MESSAGE are required')
		}
		if(!isValidEmail(email)){
			return setWarning('Email address is not valid')
		}
		//TODO ===>>> here fetch message to backend <<<<====== TODO
		console.log(name, email, message)
		setWarning('')
		return e.target.reset()
	}
	const isValidEmail = (email) =>{
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}

	return(
		<div className='contact'>
			<form className='contact__form' onSubmit={sendContactForm}>
				<h1 className='contact__form--header'>{checkLang('Contact Form','Contact Formulier')}</h1>
				<p className='contact__form--info'>
					{checkLang('Do you have a question? Fill in this contact form and we will answer your question within 3 working days. Do you have a question about online order? Please include your order number in this form:','Heb je een vraag of opmerking? Vul dan onderstaand contactformulier in, wij streven ernaar om je vraag binnen 3 werkdagen te beantwoorden. Heb je een vraag over een online bestelling? Vermeld dan het ordernummer in onderstaand formulier:')}
				</p>
				{
					warning?
						<div className='contact__form--warning'>
							{warning}
						</div>
					:null
				}
				<div className='contact__form--field'>
					<label>{checkLang('Name','Naam')}</label>
					<input name='contact_name' type='text' onChange={(e)=>setName(e.target.value)}/>
				</div>
				<div className='contact__form--field'>
					<label>{checkLang('Email','Email')}</label>
					<input name='contact_email' type='email' required onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div className='contact__form--field'>
					<label>{checkLang('Message','Bericht')}</label>
					<textarea name='contact_msg' maxLength='500' required onChange={(e)=>setMessage(e.target.value)}>
					</textarea>
				</div>
				<div className='contact__form--btn'>
					<button type='submit'>{checkLang('Send','Stuur')}</button>
				</div>

			</form>
			<div className='contact__details' id='klantenservice'>
				<h1 className='contact__details--header'>{checkLang('Customer Service','Klantenservice')}</h1>
				<h3 className='contact__details--intro'>{checkLang('OUR CUSTOMER SERVICE IS FOR YOUR DISPOSAL','ONZE KLANTENSERVICE IS JE GRAAG VAN DIENST')}</h3>
				<p className='contact__details--info'>
					{checkLang('Do you have a question? Please contact our customer service by chosing one of the options below.','Heb je een vraag voor ons? Neem gerust contact met een van onze klantenservice medewerkers op via de onderstaande contactgegevens.')}
				</p>
				<a href='tel:0682307051' className='contact__details--field'>
					<FiPhoneCall className='contact__details--field-icon'  />
					<p >06545464654</p>
				</a>
				<a  href='mailTo:ml.antczak@gmail.com' className='contact__details--field'>
					<FiMail className='contact__details--field-icon' />
					<p>service@clairehempbury.com</p>
				</a>
				<div className='contact__details--field'>
					<FiMapPin className='contact__details--field-icon' />
					<div>
						<p>Claire Hempbury Inc.</p>
						<p>Street Avenue 90</p>
						<p>2712 DX13 Montgomery</p>
						<p>United States</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact