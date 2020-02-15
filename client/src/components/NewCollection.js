import React from 'react';
import {Products} from '../data/Products'
import Item from './Item'


function NewCollection(props) {

	const {prodId} = props.match.params
	const products = Products.filter(prod=>prod.categories.includes('new'))

	let item 

	if(prodId!=="home"){
		item=products.find(p=>p.id===prodId)
	}

	console.log(products, item)

	return(
		 <div className="newCollection" style={{marginTop: '17rem'}}>
		      
	      	<h1 className="newCollection__header">Nieuw Collectie</h1>
	      	{item?<Item item={item} lang={props.lang}/>:null}
	      	<div className='newCollection__all'>
	      		{
	      			products.map(prod=>{
	      				return(
	      					<div className='newCollection__all--each' key={`${prod.id}`}>
		      					<h1>{prod.name}</h1>
		      					{prod.colors.map(color=><p key={`color-${color}`}>{color}</p>)}

		      				</div>
		      			)
	      			})
	      		}
	      	</div>

	     

	  	</div>
		)

	
}

export default NewCollection;