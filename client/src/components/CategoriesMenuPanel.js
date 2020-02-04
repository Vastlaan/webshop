import React from 'react';

const CategoriesMenuPanel = (props) =>{

	if(props.lang==="EN"){
		return(
			<ul className='categoriesMenuPanel'>
				<li onClick={()=>window.location.href='/sale'}>SALE</li>
				<li onClick={()=>window.location.href='/men'}>MEN</li>
				<li onClick={()=>window.location.href='/women'}>Women</li>
				<li onClick={()=>window.location.href='/bestsellers'}>BESTSELLERS</li>
				<li onClick={()=>window.location.href='/nieuw'}>New Collection</li>
			</ul>
			)
	}
	return(
		<ul className='categoriesMenuPanel'>
			<li onClick={()=>window.location.href='/sale'}>SALE</li>
			<li onClick={()=>window.location.href='/men'}>MANNEN</li>
			<li onClick={()=>window.location.href='/women'}>VROUWEN</li>
			<li onClick={()=>window.location.href='/bestsellers'}>BESTSELLERS</li>
			<li onClick={()=>window.location.href='/nieuw'}>NIEUWE COLLECTIE</li>
		</ul>
		)
}

export default CategoriesMenuPanel