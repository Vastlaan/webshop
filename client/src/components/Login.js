import React, {useState} from 'react';
import {Users} from '../data/Users'
import {useHistory} from 'react-router-dom';

const Login =(props)=>{

	const {user, setUser} = props
	const history = useHistory()


	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const authorize = (e) =>{
		e.preventDefault()
	
		fetch('/auth/login', {
			method: 'POST',
			credentials:'include',
			headers:{
				"Content-Type":"application/json"
			},
			body: JSON.stringify({email, password})
		})
		 .then(res=>res.json())
		 .then(data=>{
		 	setUser(data)
		 	return history.push('/')
		 })
		 .catch(err=>console.log(err))
		 return
	}
	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		<div className='login'>
			<div className='login__header'>
				<h1>{checkLang('Welcome on My Claire Hempbury.','Welkom op Mijn Claire Hempbury')}</h1>
				<h3>{checkLang('Log in on your account','Log in op uw account')}.</h3>
			</div>
			<form className='login__form' onSubmit={authorize}>
				<div className='login__form--field'>
					<label>Email:</label>
					<input type='email' name='email' id='form_email' onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div className='login__form--field'>
					<label>{checkLang('Password','Wachtword')}:</label>
					<input type='password' name='password' id='form_password' onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<div className='login__form--field'>
					<button type='submit'>{checkLang('Log In','Inloggen')}</button>
				</div>
			</form>
		</div>
		)
}

export default Login