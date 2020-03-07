import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { 
  Context
} from '../store'


const Register =(props)=>{

	const history = useHistory()
	const { store, dispatch } = useContext(Context)


	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')

	const validateEmail = (email) =>{
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}
	const validatePassword = (password) =>{
		var re = /^(?=.*[a-z])(?=.*\d).{8,20}$/;
    	return re.test(String(password).toLowerCase());
	}
	const register = (e) =>{
		e.preventDefault()

		if(!validateEmail(email)){
			return setMessage('Email is not valid')
		}
		if(!validatePassword(password)){
			return setMessage('Password is not valid. The string must be eight characters or longer. The string must contain cipher.')
		}
	
		fetch('/auth/register', {
			method: 'POST',
			credentials:'include',
			headers:{
				"Content-Type":"application/json"
			},
			body: JSON.stringify({email, password})
		})
		 .then(res=>res.json())
		 .then(data=>{
		 	if(data.error){
		 		return setMessage(data.error)
		 	}
		 	if(data.success){
		 		setTimeout(history.push('/login'),5000)
		 		return setMessage(data.success)
		 	}
		 	return setMessage('Try again.')
		 	
		 	// dispatch({
		 	// 	type:'updateUser',
		 	// 	payload: data.user
		 	// })
		 	// localStorage.setItem('claireAuthToken',data.token)
		 	// return history.push('/')
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
				<h3>{checkLang('Register new account.','Nieuwe account aanmaken')}.</h3>
			</div>
			<div className='login__msg'>
				{message?<p>{message}</p>:null}
			</div>
			<form className='login__form' onSubmit={register}>
				<div className='login__form--field'>
					<label>Email:</label>
					<input type='email' name='email' id='form_email' onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div className='login__form--field'>
					<label>{checkLang('Password','Wachtword')}:</label>
					<input type='password' name='password' id='form_password' onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<div className='login__form--field'>
					<button type='submit'>{checkLang('Register','Registreren')}</button>
				</div>
			</form>
		</div>
		)
}

export default Register