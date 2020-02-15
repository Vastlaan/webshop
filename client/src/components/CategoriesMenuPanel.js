import React from 'react';
import {Link} from 'react-router-dom'

const CategoriesMenuPanel = (props) =>{

	if(props.lang==="EN"){
		return(
			<ul className='categoriesMenuPanel'>
				<Link className='categoriesMenuPanel__link' to='/sale'>SALE</Link>
				<Link className='categoriesMenuPanel__link' to='/men'>MEN</Link>
				<Link className='categoriesMenuPanel__link' to='/women'>Women</Link>
				<Link className='categoriesMenuPanel__link' to='/bestsellers'>BESTSELLERS</Link>
				<Link className='invisibleForSmallDevices categoriesMenuPanel__link' to='/new/home'>New Collection</Link>
			</ul>
			)
	}
	return(
		<ul className='categoriesMenuPanel'>
			<Link className='categoriesMenuPanel__link' to='/sale'>SALE</Link>
			<Link className='categoriesMenuPanel__link' to='/men'>MANNEN</Link>
			<Link className='categoriesMenuPanel__link' to='/women'>VROUWEN</Link>
			<Link className='categoriesMenuPanel__link' to='/bestsellers'>BESTSELLERS</Link>
			<Link className='invisibleForSmallDevices categoriesMenuPanel__link' to='/new/home'>NIEUWE COLLECTIE</Link>
		</ul>
		)
}

export default CategoriesMenuPanel