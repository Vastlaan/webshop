import React from 'react';
import {Products} from '../data/Products'
import Item from './Item'
import {renderDescription} from '../utils/renderDescription'



function Bestsellers(props) {

	const {prodId} = props.match.params
	const products = Products.filter(prod=>prod.categories.includes('bestsellers'))

	let item 

	if(prodId!=="home"){
		item=products.find(p=>p.id===prodId)
	}


	return(
		 <div className="newCollection" style={{marginTop: '17rem', paddingTop:'5rem'}}>
		      
	      	
	      	{item?<Item item={item} lang={props.lang}/>:null}

	      	<h1 className="newCollection__header">Bestsellers</h1>

	      	<div className='collectionPanel__collection' style={{flexWrap:'wrap', overflow:'hidden'}}>
	      		{
	      			products.map(prod=>{
	      				return(
	      					<div className='collectionPanel__item' key={`bestsellers-${prod.name}`} onClick={()=>window.location.href=`/new/${prod.id}`}>
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

export default Bestsellers;