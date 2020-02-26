import React, {useState} from 'react';
import {Users} from '../data/Users'

const Login =(props)=>{

	const {user, setUser} = props


	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const authorize = (e) =>{
		e.preventDefault()
		const user = Users.find(user=>{
			return user.email===email && user.password===password
		})
		console.log(user)
		fetch('/auth/login', {
			method: 'POST',
			credentials:'include',
			headers:{
				"Content-Type":"application/json"
			},
			body: JSON.stringify({email, password})
		})
		 .then(res=>res.json())
		 .then(data=>console.log(data))
		 .catch(err=>console.log(err))
		return user
	}

	return(
		<div className='login'>
			<div className='login__header'>
				<h1>Welkom op Mijn Claire Hempbury</h1>
				<h3>Log in op uw account.</h3>
			</div>
			<form className='login__form' onSubmit={authorize}>
				<div className='login__form--field'>
					<label>Email:</label>
					<input type='email' name='email' id='form_email' onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div className='login__form--field'>
					<label>Wachtword:</label>
					<input type='password' name='password' id='form_password' onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<div className='login__form--field'>
					<button type='submit'>Inloggen</button>
				</div>
			</form>
		</div>
		)
}

export default Login