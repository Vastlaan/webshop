import React from 'react'
import {Products} from '../data/Products'
import {renderDescription} from '../utils/renderDescription'


const BestsellersCollectionPanel = (props) =>{

	//this panel navigate to item through category "bestsellers" so path should be '/bestsellers/item_id'

	const productsNew = Products.filter(prod=>prod.categories.includes("bestsellers"))

	return(
		<div className='collectionPanel'>

			<div className='collectionPanel__header'>
				<h1>Bestsellers</h1>
			</div>
			<div className='collectionPanel__collection'>
			{
				productsNew.map(prod=>{
						return(
							<div className='collectionPanel__item' key={`collpan-${prod.name}`} onClick={()=>window.location.href=`/bestsellers/${prod.id}`}>
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
									<div onClick={()=>window.location.href=`/new/${prod.id}`}>
										<p>Shop nu</p>
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