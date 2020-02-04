import React, {useState} from 'react';
import FlagNL from '../img/flagNL.png';
import FlagUK from '../img/flagUK.png';
import { FiUser, FiChevronDown, FiChevronUp } from "react-icons/fi";

const InformativePanel = (props) =>{

	const [displayLangPanel, setDisplayLangPanel] = useState(false)

	if(props.lang==='EN'){
		return(
		<nav className='informativePanel'>
			<ul className='informativePanel__section'>
				<li><a href='/contact'>Contact</a></li>
				<li><a href='/klantenservice'>Customer Service</a></li>
			</ul>
			<ul className='informativePanel__section'>
				
					{
						displayLangPanel?(
							<li style={{position:'relative'}} >
								<div className='informativePanel__section--flag'><img src={FlagUK} alt='Netherlands flag'/>EN</div>
								<FiChevronUp className='iconRight informativePanel__section--lang' onClick={()=>setDisplayLangPanel(false)}/>

								<div className='informativePanel__langMenu'>
									<div className='informativePanel__section--flag' onClick={()=>{
										props.setLang('NL')
										return setDisplayLangPanel(false)
										
									}}><img src={FlagNL} alt='Netherlands flag'/>Nederlands</div>
									<div className='informativePanel__section--flag'onClick={()=>{
										props.setLang('EN')
										setDisplayLangPanel(false)
										return
									}}><img src={FlagUK} alt='UK flag'/>English</div>
								</div>
							</li>
						)
						:(
							<li>
								<div className='informativePanel__section--flag'><img src={FlagUK} alt='Netherlands flag'/>{props.lang}</div>
								<FiChevronDown className='iconRight informativePanel__section--lang' onClick={()=>setDisplayLangPanel(true)}/>
							</li>
						)
					}
					
				<li><a href='/login'><FiUser className='iconLeft'/>Log In</a></li>
				<li><a href='/register'>Register</a></li>
				
			</ul>
		</nav>
		)
	}
	return(
		<nav className='informativePanel'>
			<ul className='informativePanel__section'>
				<li><a href='/contact'>Contact</a></li>
				<li><a href='/klantenservice'>Klantenservice</a></li>
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
					
				<li><a href='/login'><FiUser className='iconLeft'/>Inloggen</a></li>
				<li><a href='/register'>Registeren</a></li>
				
			</ul>
		</nav>
		)
}

export default InformativePanel