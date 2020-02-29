import React from 'react';
import {useHistory} from 'react-router-dom';
import {Products} from '../data/Products'
import Item from './Item'
import {renderDescription} from '../utils/renderDescription'



function All(props) {

	const history = useHistory()

	const {prodId} = props.match.params

	let item 

	if(prodId!=="home"){
		item=Products.find(p=>p.id===prodId)
	}
	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		 <div className="newCollection">
		      
	      	
	      	{item?<Item item={item} lang={props.lang}/>:null}

	      	<h1 className="newCollection__header">{checkLang('Matching Items', 'Soortgelijke products')}</h1>

	      	<div className='collectionPanel__collection' style={{flexWrap:'wrap', overflow:'hidden'}}>
	      		{
	      			Products.map(prod=>{
	      				return(
	      					<div className='collectionPanel__item' key={`all-${prod.id}`} onClick={()=> history.push(`/all/${prod.id}`)}>
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
									<div onClick={()=> history.push(`/all/${prod.id}`)}>
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

export default All;