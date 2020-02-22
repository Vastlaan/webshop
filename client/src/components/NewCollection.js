import React, {useState} from 'react';
import {Products} from '../data/Products'
import Item from './Item'
import { FaChevronRight, FaChevronLeft} from "react-icons/fa";
import {renderDescription} from '../utils/renderDescription'



function NewCollection(props) {

	const {prodId} = props.match.params
	const allProducts = Products.filter(prod=>prod.categories.includes('new'))
	const interval = 2
	const maxPages = Math.ceil(allProducts.length / interval)

	const [page, setPage] = useState(1)

	const renderNewPage =(direction)=>{
		if(direction==='down'){
			setPage(page-1)
		}else if( direction==='up'){
			setPage(page+1)
		}
		return window.scrollTo(0,0)
	}

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
		 <div className="newCollection" style={{marginTop: '17rem', paddingTop:'5rem'}}>
		      
	      	
	      	{item?<Item item={item} lang={props.lang}/>:null}

	      	<h1 className="newCollection__header">Nieuw Collectie</h1>

	      	<div className='collectionPanel__collection' style={{flexWrap:'wrap', overflow:'hidden'}}>
	      		{
	      			products.map(prod=>{
	      				return(
	      					<div className='collectionPanel__item' key={`newcoll-${prod.id}`} onClick={()=>window.location.href=`/new/${prod.id}`}>
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
	      	<div className='newCollection__page'>
  				<div className='newCollection__page-less' onClick={()=>renderNewPage('down')} style={page===1?{ display: 'none'}:{display:'flex'} } >
  					<FaChevronLeft/>
  				</div>
  				<div className='newCollection__page-num'>
  					{page}
  				</div>
  				<div className='newCollection__page-more' onClick={()=>renderNewPage('up')} style={page===maxPages?{ display: 'none'}:{display:'flex'} } >
  					<FaChevronRight/>
  				</div>
				
			</div>
	  	</div>
		)

	
}

export default NewCollection;