import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom';
import { Context } from '../store'
import {Products} from '../data/Products'
import {renderDescription} from '../utils/renderDescription'


const BestsellersCollectionPanel = (props) =>{

	//this panel navigate to item through category "bestsellers" so path should be '/bestsellers/item_id'
	const history = useHistory()
	const { store, dispatch } = useContext(Context)
	let products = shuffle(Products)
	if(store.user.watchedproducts){
		products = Products.filter(prod=> {
			console.log(prod.id, store.user.watchedproducts)
			return store.user.watchedproducts.includes(prod.id)
		})
	}
	
	console.log(products)

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}
	function shuffle(a) {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
	    return a;
	}

	return(
		<div className='collectionPanel'>

			<div className='collectionPanel__header'>
				<h1>{store.user.watchedproducts?checkLang('Recently watched','Recent bekeken'):checkLang('Bestsellers','Bestsellers')}</h1>
			</div>
			<div className='collectionPanel__collection'>
			{
				products.map(prod=>{
						return(
							<div className='collectionPanel__item' key={`collpan-${prod.name}`} onClick={()=>history.push(`/all/${prod.id}`)}>
								<div className='collectionPanel__item--name'>
									<p>{prod.name}</p>
								</div>
								<div className='collectionPanel__item--image'>
									<img src={prod.imageUrl} alt={prod.name} />
								</div>
								
								<div className='collectionPanel__item--description'>
									<p>{renderDescription(prod.description)}</p>
								</div>
								<div className='collectionPanel__item--price'>
									<p> &euro; {prod.price}</p>
								</div>
								
								<div className='collectionPanel__item--btn'>
									<div onClick={()=>history.push(`/all/${prod.id}`)}>
										<p>{checkLang('Shop now','Shop nu')}</p>
									</div>
								</div>
							</div>
						)
				})
			}
			</div>
		</div>
		)
}

export default BestsellersCollectionPanel