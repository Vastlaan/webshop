import React ,{useState} from 'react';
import {Products} from '../data/Products'
import Item from './Item'
import {renderDescription} from '../utils/renderDescription'
import Page from './Page'



function Bestsellers(props) {

	const {prodId} = props.match.params
	const allProducts = Products.filter(prod=>prod.categories.includes('bestsellers'))
	const interval = 3
	const maxPages = Math.ceil(allProducts.length / interval)

	const [page, setPage] = useState(1)

	const products = allProducts.filter((prod,i)=>{
		const first = (page * interval) - interval
		const last = (page * interval) -1
		return i>=first && i<=last
	})
	
	let item 

	if(prodId!=="home"){
		item=allProducts.find(p=>p.id===prodId)
	}


	return(
		 <div className="newCollection" style={{marginTop: '18rem', paddingTop:'5rem'}}>
		      
	      	
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
	      	<Page page={page} setPage={setPage} maxPages={maxPages}/>
	  	</div>
		)

	
}

export default Bestsellers;