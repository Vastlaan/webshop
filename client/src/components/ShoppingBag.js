import React from 'react'
import {Link, useHistory} from 'react-router-dom';



const ShoppingBag =(props)=>{

	const history = useHistory()

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		<div className='shoppingBag' style={{marginTop:'22rem'}}>
			Shopping bag
		</div>
		)
}

export default ShoppingBag