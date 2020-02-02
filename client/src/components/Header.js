import React from 'react';
import { FiSearch } from "react-icons/fi";

const Header = (props) =>{
	return(
		<div className='header'>
			<div className='header__name'>
				<h1>Name</h1>
			</div>
			<div className='header__search'>
				<input type='text' />
				<FiSearch className='header__search--icon'/>

			</div>
			<div className='header__shopping'>
				<h1>BAG</h1>
			</div>
		</div>
		)
}

export default Header