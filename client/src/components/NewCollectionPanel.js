import React from 'react'
import {useHistory} from 'react-router-dom';
import {Products} from '../data/Products'
import {renderDescription} from '../utils/renderDescription'


const NewCollectionPanel = (props) =>{

	//this panel navigate to item through category "new" so path should be '/new/item_id'

	const productsNew = Products.filter(prod=>prod.categories.includes("new"))
	const history = useHistory()

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		<div className='collectionPanel'>

			<div className='collectionPanel__header'>
				<h1>{checkLang('New Collection','Nieuwe Collectie')}</h1>
			</div>
			<div className='collectionPanel__collection' id='newCollectionPanel'>
			{
				productsNew.map(prod=>{
						return(
							<div className='collectionPanel__item' key={`collpan-${prod.id}`} onClick={()=>history.push(`/new/${prod.id}`)}>
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
									<div onClick={()=>history.push(`/new/${prod.id}`)}>
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

export default NewCollectionPanel