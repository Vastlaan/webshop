import React from 'react'
import {useHistory} from 'react-router-dom';
import {Products} from '../data/Products'
import {renderDescription} from '../utils/renderDescription'


const BestsellersCollectionPanel = (props) =>{

	//this panel navigate to item through category "bestsellers" so path should be '/bestsellers/item_id'
	const history = useHistory()
	const productsNew = Products.filter(prod=>prod.categories.includes("bestsellers"))
	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		<div className='collectionPanel'>

			<div className='collectionPanel__header'>
				<h1>Bestsellers</h1>
			</div>
			<div className='collectionPanel__collection'>
			{
				productsNew.map(prod=>{
						return(
							<div className='collectionPanel__item' key={`collpan-${prod.name}`} onClick={()=>history.push(`/bestsellers/${prod.id}`)}>
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
									<div onClick={()=>history.push(`/bestsellers/${prod.id}`)}>
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