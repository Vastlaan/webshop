import React, {useState} from 'react';
import {Products} from '../data/Products'
import { FiSearch, FiShoppingCart} from "react-icons/fi";
import { MdClose} from "react-icons/md";
import {renderDescription} from '../utils/renderDescription'

const Header = (props) =>{

	const [searchedItems, setSearchedItems] = useState([])

	const renderSearchedItems = async (event)=>{
		const phrase = event.target.value
		if(phrase===""){
			return await setSearchedItems([])
		}
		const matchingItems = Products.filter(prod=>prod.name.toUpperCase().includes(phrase.toUpperCase()))
		
		return await setSearchedItems(matchingItems)
	}

	const clearQuery = async() =>{
		
		const input = document.querySelector('#searchField')
		
		await setSearchedItems([])
		return input.value =''
	}


	return(
		<div className='header'>
			<div className='header__name' onClick={()=>window.location.href='/'}>
				<h1>Claire Hempbury</h1>
				<h2>outstanding fashion</h2>
			</div>
			<div className='header__search'>
				<input type='text' id='searchField' onChange={(event)=>renderSearchedItems(event)} />
				<FiSearch className='header__search--icon'/>

			</div>
			<div className='header__shopping'>
				<h1><FiShoppingCart className='iconRight header__shopping--icon'/></h1>
				<div className='header__shopping--amount'>{props.shoppingCart.length}</div>
			</div>
			{
				searchedItems.length>0?
				<div className='header__results'>
					<div className='header__results--close' onClick={()=>clearQuery()}><MdClose/></div>
					<div className='collectionPanel__collection'  style ={{ flexWrap:'wrap', overflowX:'hidden'}} >
			{
				searchedItems.map(prod=>{
						return(
							<div className='collectionPanel__item'  style={{width:'100%', transform:'scale(0.9)'}} key={`collpan-${prod.id}`} onClick={()=>window.location.href=`/all/${prod.id}`}>
								<div className='collectionPanel__item--name'>
									<p>{prod.name}</p>
								</div>
								<div className='collectionPanel__item--image'>
									<img src={prod.imageUrl} alt={prod.name} />
								</div>
								
								<div className='collectionPanel__item--description'>
									<p>{renderDescription(prod.description, 100)}</p>
								</div>
								<div className='collectionPanel__item--price'>
									<p> &euro; {prod.price}</p>
								</div>
								
								<div className='collectionPanel__item--btn'>
									<div onClick={()=>window.location.href=`/all/${prod.id}`}>
										<p>Shop nu</p>
									</div>
								</div>
								
								
								
							</div>
						)
				})
			}

			
			</div>
				</div>
				:null
			}
		</div>
		)
}

export default Header