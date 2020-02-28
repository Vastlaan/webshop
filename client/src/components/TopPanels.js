import React, {useState, useEffect} from 'react';
import InformativePanel from './InformativePanel'
import Header from './Header'
import CategoriesMenuPanel from './CategoriesMenuPanel'

const TopPanels = (props) =>{

	const [displayInformativePanel, setDisplayInformativePanel] = useState(true)

	const modifyInformativePanel = () =>{
		const pYo = window.pageYOffset
		if(pYo>20){
			return setDisplayInformativePanel(false)
		}
		return setDisplayInformativePanel(true)
	}

	useEffect(()=>{
		window.addEventListener('scroll', modifyInformativePanel)

		return ()=>{window.removeEventListener('scroll', modifyInformativePanel)}
	})
	return(
		<div style={{width:'100%', position:'fixed',top:0, left:0, zIndex:99}}>
			{displayInformativePanel?<InformativePanel lang={props.lang} setLang={props.setLang}  user={props.user}/>:null}	
	      	<Header shoppingCart={props.shoppingCart} setShoppingCart={props.setShoppingCart}/>
	      	<CategoriesMenuPanel lang={props.lang}/>
	    </div>
	)
}

export default TopPanels