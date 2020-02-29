import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Products} from '../data/Products'
import Item from './Item'
import {renderDescription} from '../utils/renderDescription'
import Page from './Page'



function NewCollection(props) {
	//destructure product id passed as query parameter and served by the Router component in props
	const {prodId} = props.match.params

	const allProducts = Products.filter(prod=>prod.categories.includes('new'))
	//interval determine how many products display per page
	const interval = 3
	// determines number of pages based of amount of products and interval
	const maxPages = Math.ceil(allProducts.length / interval)
	//pull out Router history for navigation purposes
	const history = useHistory()

	const [page, setPage] = useState(1)

	//responsible for displaing proper products on each page
	const products = allProducts.filter((prod,i)=>{
		const first = (page * interval) - interval
		const last = (page * interval) -1
		return i>=first && i<=last
	})
	
	let item 
	//if prodId has been passed in query, find item in all Products
	if(prodId!=="home"){
		item=allProducts.find(p=>p.id===prodId)
	}

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		 <div style={{marginTop: '17rem', paddingTop:'5rem'}}>
		      
	      	
	      	{item?<Item item={item} lang={props.lang}/>:null}

	      	<h1 className="newCollection__header">{checkLang('New Collection','Nieuw Collectie')}</h1>

	      	<div className='collectionPanel__collection' style={{flexWrap:'wrap', overflow:'hidden'}}>
	      		{
	      			products.map(prod=>{
	      				return(
	      					<div className='collectionPanel__item' key={`newcoll-${prod.id}`} onClick={()=>history.push(`/new/${prod.id}`)}>
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
	      	<Page page={page} setPage={setPage} maxPages={maxPages}/>
	  	</div>
		)

	
}

export default NewCollection;