import React, {useState, useContext} from 'react';
import { 
  Context
} from '../store'
import {Link} from 'react-router-dom';
import FlagNL from '../img/flagNL.png';
import FlagUK from '../img/flagUK.png';
import { FiUser, FiChevronDown, FiChevronUp } from "react-icons/fi";

const InformativePanel = (props) =>{

	const [displayLangPanel, setDisplayLangPanel] = useState(false)

	const { store } = useContext(Context)

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}
	
	return(
		<nav className='informativePanel'>
			<ul className='invisibleForSmallDevices informativePanel__section '>
				<li><Link to='/contact'>{checkLang('Contact', 'Contact')}</Link></li>
				<li><Link to='/klantenservice'>{checkLang('Customer Service', 'Klantenservice')}</Link></li>
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
					
				{store.user.name
					?<li style={{flex:1}}><Link to='/'><FiUser className='iconLeft'/>{checkLang('Welcome', 'Welkom')} {store.user.name} {store.user.surname}</Link></li> 
					: <li><Link to='/login'><FiUser className='iconLeft'/>{checkLang('Log in', 'Inloggen')}</Link></li>
				}
				<li><Link to='/register'>{checkLang('Register', 'Registreren')}</Link></li>
				
			</ul>
		</nav>
		)
}

export default InformativePanel