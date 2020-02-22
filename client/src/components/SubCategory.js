import React, {useState} from 'react';
import {Products} from '../data/Products'
import Item from './Item'
import { FaChevronRight, FaChevronLeft} from "react-icons/fa";
import {renderDescription} from '../utils/renderDescription'
import Page from './Page'



function SubCategory(props) {

	const {prodId} = props.match.params
	const allProducts = Products.filter(prod=>prod.categories.includes(props.subCategory)&&prod.categories.includes(props.parentCategory))
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
	const {parentCategory} = props
	let cat1 = props.lang==='NL'?'mannen':'men'
	if(parentCategory==='women'){
		cat1=props.lang==='NL'?'vrouwen':'women'
	}

	return(
		 <div className="subCategory" style={{marginTop: '17rem', paddingTop:'5rem'}}>
		      
	      	
	      	{item?<Item item={item} lang={props.lang}/>:null}

	      	<div className="subCategory__nav">{cat1} > {props.subCategory}</div>

	      	<div className='collectionPanel__collection' style={{flexWrap:'wrap', overflow:'hidden'}}>

	      		{
	      			products.length<1?
	      			<div style={{display:'flex', justifyContent:'center', width:'100%', fontSize:'2.5rem', fontFamily:'Courier', color:'orangered'}}>
	      				Geen artikelen gevonden
	      			</div>
	      			:null
	      		}

	      		{
	      			products.map(prod=>{
	      				return(
	      					<div className='collectionPanel__item' key={`newcoll-${prod.id}`} onClick={()=>window.location.href=`/all/${prod.id}`}>
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
									<div onClick={()=>window.location.href=`/all/:${prod.id}`}>
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

export default SubCategory;