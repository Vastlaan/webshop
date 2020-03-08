import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

const Contact = (props) =>{

	const history = useHistory()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	const sendContactForm =(e)=>{
		e.preventDefault()
		console.log(name, email, message)
	}

	return(
		<div className='contact'>
			<form className='contact__form' onSubmit={sendContactForm}>
				<h1 className='contact__form--header'>{checkLang('Contact Form','Contact Formulier')}</h1>
				<p className='contact__form--info'>
					{checkLang('Do you have a question? Fill in this contact form and we will answer your question within 3 working days. Do you have a question about online order? Please include your order number in this form:','Heb je een vraag of opmerking? Vul dan onderstaand contactformulier in, wij streven ernaar om je vraag binnen 3 werkdagen te beantwoorden. Heb je een vraag over een online bestelling? Vermeld dan het ordernummer in onderstaand formulier:')}
				</p>
				<div className='contact__form--field'>
					<label>{checkLang('Name','Naam')}</label>
					<input name='contact_name' type='text' onChange={(e)=>setName(e.target.value)}/>
				</div>
				<div className='contact__form--field'>
					<label>{checkLang('Email','Email')}</label>
					<input name='contact_email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div className='contact__form--field'>
					<label>{checkLang('Message','Bericht')}</label>
					<textarea name='contact_msg' onChange={(e)=>setMessage(e.target.value)}>
					</textarea>
				</div>
				<div className='contact__form--btn'>
					<button type='submit'>{checkLang('Send','Stuur')}</button>
				</div>

			</form>
			<div className='contact__details' id='klantenservice'>
				<h1 className='contact__details--header'>{checkLang('Customer Service','Klantenservice')}</h1>
			</div>
		</div>
	)
}

export default Contact