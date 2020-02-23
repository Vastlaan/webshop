import React, {useState} from 'react';
import {Users} from '../data/Users'

const Login =(props)=>{


	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const authorize = () =>{
		const user = Users.find(user=>{
			return user.email===email && user.password===password
		})
		console.log(user)
		return user
	}

	return(
		<div className='login'>
			<div className='login__header'>
				<h1>Welkom op Mijn Claire Hempbury</h1>
				<h3>Log in op uw account.</h3>
			</div>
			<div className='login__form'>
				<div className='login__form--email'>
					<input type='email' name='email' id='form_email' onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div className='login__form--password'>
					<input type='password' name='password' id='form_password' onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<div>
					<button type='submit' onClick={authorize}>Inloggen</button>
				</div>
			</div>
		</div>
		)
}

export default Login