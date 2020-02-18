import React from 'react';
import {Products} from '../data/Products'
import Item from './Item'

const CATEGORIES =  ["sweaters", "vests", "shirts", "underwear", "trousers", "suits", "jackets", "additions"].sort((a,b)=>{
	if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})

const Men = (props) =>{

	const products = Products.filter(prod=>prod.categories.includes('men'))
	const {prodId} = props.match.params

	let item 

	if(prodId!=="home"){
		item=products.find(p=>p.id===prodId)
	}

	return(
		<div  className='men' style={{marginTop:'17rem'}}>

			{item?<Item item={item} lang={props.lang}/>:null}

			<h1 className='men__header'>Mannen Categories</h1>
			<div className='men__categories'>

				{
					CATEGORIES.map((cat,i)=>{
						return(
							<div key={`men-cat-${i}`} className='men__categories--each' onClick={()=>window.location.href=`/men/${cat}/home`}>
								{cat}
							</div>
							)
					})
				}
			</div>

			<div className="newCollection">

	      	<h1 className="newCollection__header">Meest gekozen</h1>

	      	<div className='collectionPanel__collection' style={{flexWrap:'wrap', overflow:'hidden'}}>
	      		{
	      			products.map((prod,i)=>{
	      				return(
	      					<div className='collectionPanel__item' key={`men-${i}-${prod.name}`} onClick={()=>window.location.href=`/men/${prod.id}`}>
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
									<div onClick={()=>window.location.href=`/men/:${prod.id}`}>
										<p>Shop now</p>
									</div>
								</div>
							</div>
	      					
		      			)
	      			})
	      		}
	      	</div>
	  	</div>
		</div>
	)
}

export default Men