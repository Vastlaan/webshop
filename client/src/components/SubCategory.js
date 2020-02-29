import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Products} from '../data/Products'
import Item from './Item'
import {renderDescription} from '../utils/renderDescription'
import Page from './Page'



function SubCategory(props) {
	//destructure product id passed as query parameter and served by the Router component in props
	const {prodId} = props.match.params
	const allProducts = Products.filter(prod=>prod.categories.includes(props.subCategory)&&prod.categories.includes(props.parentCategory))
	//interval determine how many products display per page
	const interval = 3
	// determines number of pages based of amount of products and interval
	const maxPages = Math.ceil(allProducts.length / interval)
	//pull out Router history for navigation purposes
	const history = useHistory()

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
	//change categories tabs language based on props.lang
	const {parentCategory} = props
	let cat1 = props.lang==='NL'?'mannen':'men'
	if(parentCategory==='women'){
		cat1=props.lang==='NL'?'vrouwen':'women'
	}
	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		 <div className="subCategory" style={{marginTop: '17rem', paddingTop:'5rem'}}>
		      
	      	
	      	{item?<Item item={item} lang={props.lang}/>:null}

	      	<div className="subcategory__nav">
	      		<Link to={`/${parentCategory}/home`}> {cat1} </Link>
	      		 <span> > </span>
	      		<a>{props.subCategory}</a>
	      	</div>

	      	<div className='collectionPanel__collection' style={{flexWrap:'wrap', overflow:'hidden'}}>

	      		{
	      			products.length<1?
	      			<div style={{display:'flex', justifyContent:'center', width:'100%', fontSize:'2.5rem', fontFamily:'Courier', color:'orangered', margin:'15rem auto'}}>
	      				{checkLang('No produts found','Geen artikelen gevonden')}
	      			</div>
	      			:null
	      		}

	      		{
	      			products.map(prod=>{
	      				return(
	      					<div className='collectionPanel__item' key={`newcoll-${prod.id}`} onClick={()=>history.push(`/all/${prod.id}`)}>
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
									<div onClick={()=>history.push(`/all/${prod.id}`)}>
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

export default SubCategory;