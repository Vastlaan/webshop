import React from 'react';
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Header = (props) =>{
	return(
		<div className='header'>
			<div className='header__name' onClick={()=>window.location.href='/'}>
				<h1>Claire Hempbury</h1>
				<h2>outstanding fashion</h2>
			</div>
			<div className='header__search'>
				<input type='text' />
				<FiSearch className='header__search--icon'/>

			</div>
			<div className='header__shopping'>
				<h1><FiShoppingCart className='iconRight header__shopping--icon'/></h1>
				<div className='header__shopping--amount'>{props.shoppingCart.length}</div>
			</div>
		</div>
		)
}

export default Header