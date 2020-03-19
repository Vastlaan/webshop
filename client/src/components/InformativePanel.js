import React, {useState, useContext} from 'react';
import { 
  Context
} from '../store'
import {Link} from 'react-router-dom';
import FlagNL from '../img/flagNL.png';
import FlagUK from '../img/flagUK.png';
import { FiUser, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {useHistory} from 'react-router-dom';

const InformativePanel = (props) =>{

	const [displayLangPanel, setDisplayLangPanel] = useState(false)
	const [displayUserPanel, setDisplayUserPanel] = useState(false)

	const { store, dispatch } = useContext(Context)

	const history = useHistory()

	const logout = () =>{
		localStorage.removeItem('claireAuthToken')
		dispatch({
			type:'resetUser'
		})
		return history.push('/')
	}
	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}
	
	return(
		<nav className='informativePanel'>
			<ul className='invisibleForSmallDevices informativePanel__section '>
				<li><Link to='/shoppingBag'>{checkLang('Shopping Cart', 'Winkelmand')}</Link></li>
				<li><Link to='/contact'>{checkLang('Customer Service', 'Klantenservice')}</Link></li>
			</ul>
			<ul className='informativePanel__section'>
				
					{
						displayLangPanel?(
							<li style={{position:'relative'}} >
								<div className='informativePanel__section--flag'><img src={FlagNL} alt='Netherlands flag'/>NL</div>
								<FiChevronUp className='iconRight informativePanel__section--lang' onClick={()=>setDisplayLangPanel(false)}/>

								<div className='informativePanel__langMenu'>
									<div className='informativePanel__section--flag' onClick={()=>{
										props.setLang('NL')
										setDisplayLangPanel(false)
										return
									}}><img src={FlagNL} alt='Netherlands flag'/>Nederlands</div>
									<div className='informativePanel__section--flag' onClick={()=>{
										props.setLang('EN')
										setDisplayLangPanel(false)
										return
									}}><img src={FlagUK} alt='UK flag'/>English</div>
								</div>
							</li>
						)
						:(
							<li>
								<div className='informativePanel__section--flag'><img src={FlagNL} alt='Netherlands flag'/>{props.lang}</div>
								<FiChevronDown className='iconRight informativePanel__section--lang' onClick={()=>setDisplayLangPanel(true)}/>
							</li>
						)
					}
					
				{store.user.email
					?<li style={{flex:'0 0 100%', position:'relative', textDecoration:'none'}}>
						<div to='#' style={{cursor:'pointer'}} onClick={()=>setDisplayUserPanel(prevState=>{
							return !prevState
						})}>
							<FiUser className='iconLeft'/>
							{checkLang('Welcome', 'Welkom')} {store.user.name?`${store.user.name} ${store.user.surname}`:`${store.user.email}`}
							{displayUserPanel?
								<div style={{position:'absolute', bottom:'-8rem',left:0,  height:'8rem',width:'25rem',backgroundColor:'white', zIndex:'99',padding:'2rem'}}>
									<p style={{cursor: 'pointer'}} onClick={logout}>{checkLang('Log out','Log uit')}</p>
								</div>
								:null
							}
						</div>
					</li> 
					: <li>
						<Link to='/login'><FiUser className='iconLeft'/>{checkLang('Log in', 'Inloggen')}</Link>
					  </li>
				}
				{store.user.email
					?null
					:<li><Link to='/register'>{checkLang('Register', 'Registreren')}</Link></li>
				}
				
				
			</ul>
		</nav>
		)
}

export default InformativePanel