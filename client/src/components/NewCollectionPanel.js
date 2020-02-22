import React from 'react'
import {Products} from '../data/Products'
import {renderDescription} from '../utils/renderDescription'


const NewCollectionPanel = (props) =>{

	//this panel navigate to item through category "new" so path should be '/new/item_id'

	const productsNew = Products.filter(prod=>prod.categories.includes("new"))
	

	if(props.lang==='EN'){
		return(
			<div className='collectionPanel'>

				<div className='collectionPanel__header'>
					<h1>New Collection</h1>
				</div>
				<div className='collectionPanel__collection' id='newCollectionPanel'>
				{
					productsNew.map((prod,i)=>{
							return(
								<div className='collectionPanel__item' key={`collpan-${prod.name}`} onClick={()=>window.location.href=`/new/:prodId=${prod.id}`}>
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
										<div onClick={()=>window.location.href=`/new/:${prod.id}`}>
											<p>Shop now</p>
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

	return(
		<div className='collectionPanel'>

			<div className='collectionPanel__header'>
				<h1>Nieuwe Collectie</h1>
			</div>
			<div className='collectionPanel__collection' id='newCollectionPanel'>
			{
				productsNew.map(prod=>{
						return(
							<div className='collectionPanel__item' key={`collpan-${prod.id}`} onClick={()=>window.location.href=`/new/${prod.id}`}>
								<div className='collectionPanel__item--name'>
									<p>{prod.name}</p>
								</div>
								<div className='collectionPanel__item--image'>
									<img src={prod.imageUrl} alt={prod.name} />
								</div>
								
								<div className='collectionPanel__item--description'>
									<p>{prod.description}</p>
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

export default NewCollectionPanel