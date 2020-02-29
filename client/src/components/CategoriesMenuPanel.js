import React from 'react';
import {Link} from 'react-router-dom'

const CategoriesMenuPanel = (props) =>{

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		<ul className='categoriesMenuPanel'>
			<Link className='categoriesMenuPanel__link' to='/sale/home'>{checkLang('SALE','SALE')}</Link>
			<Link className='categoriesMenuPanel__link' to='/men/home'>{checkLang('MEN','MANNEN')}</Link>
			<Link className='categoriesMenuPanel__link' to='/women/home'>{checkLang('WOMEN','VROUWEN')}</Link>
			<Link className='categoriesMenuPanel__link' to='/bestsellers/home'>{checkLang('BESTSELLERS','BESTSELLERS')}</Link>
			<Link className='invisibleForSmallDevices categoriesMenuPanel__link' to='/new/home'>{checkLang('NEW COLLECTION','NIEUWE COLLECTIE')}</Link>
		</ul>
		)
}

export default CategoriesMenuPanel