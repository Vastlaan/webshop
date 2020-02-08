import React from 'react'
import {Products} from '../data/Products'


const NewCollectionPanel = (props) =>{

	//this panel navigate to item through category "new" so path should be '/new/item_id'

	const productsNew = Products.filter(prod=>prod.categories.includes("new"))

	return(
		<div className='newCollectionPanel'>

			<div className='newCollectionPanel__header'>
				<h1>Nieuwe Collectie</h1>
			</div>
			<div className='newCollectionPanel__collection'>
			{
				productsNew.map(prod=>{
						return(
							<div className='newCollectionPanel__item' key={`newcollpan-${prod.name}`} onClick={()=>window.location.href=`/new/${prod.id}`}>
								<div className='newCollectionPanel__item--name'>
									<p>{prod.name}</p>
								</div>
								<div className='newCollectionPanel__item--image'>
									<img src={prod.imageUrl} alt={prod.name} />
								</div>
								
								<div className='newCollectionPanel__item--description'>
									<p>{prod.description}</p>
								</div>
								<div className='newCollectionPanel__item--price'>
									<p> &euro; {prod.price}</p>
								</div>
								
								<div className='newCollectionPanel__item--btn'>
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

export default NewCollectionPanel