import React from 'react';
import {Link} from 'react-router-dom'

const CategoriesMenuPanel = (props) =>{

	if(props.lang==="EN"){
		return(
			<ul className='categoriesMenuPanel'>
				<Link className='categoriesMenuPanel__link' to='/sale/home'>SALE</Link>
				<Link className='categoriesMenuPanel__link' to='/men/home'>MEN</Link>
				<Link className='categoriesMenuPanel__link' to='/women/home'>Women</Link>
				<Link className='categoriesMenuPanel__link' to='/bestsellers/home'>BESTSELLERS</Link>
				<Link className='invisibleForSmallDevices categoriesMenuPanel__link' to='/new/home'>New Collection</Link>
			</ul>
			)
	}
	return(
		<ul className='categoriesMenuPanel'>
			<Link className='categoriesMenuPanel__link' to='/sale/home'>SALE</Link>
			<Link className='categoriesMenuPanel__link' to='/men/home'>MANNEN</Link>
			<Link className='categoriesMenuPanel__link' to='/women/home'>VROUWEN</Link>
			<Link className='categoriesMenuPanel__link' to='/bestsellers/home'>BESTSELLERS</Link>
			<Link className='invisibleForSmallDevices categoriesMenuPanel__link' to='/new/home'>NIEUWE COLLECTIE</Link>
		</ul>
		)
}

export default CategoriesMenuPanel