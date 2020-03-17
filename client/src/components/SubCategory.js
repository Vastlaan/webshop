import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Item from './Item'
import {renderDescription} from '../utils/renderDescription'
import Page from './Page'
import { AiOutlineLoading3Quarters } from "react-icons/ai";




function SubCategory(props) {
	//destructure product id passed as query parameter and served by the Router component in props
	const {prodId} = props.match.params

	const [products, setProducts] = useState([])
	const [status, setStatus] = useState('loading')
	const [page, setPage] = useState(1)

	const allProducts = products.filter(prod=>prod.categories.includes(props.subCategory)&&prod.categories.includes(props.parentCategory))
	//interval determine how many products display per page
	const interval = 3
	// determines number of pages based of amount of products and interval
	const maxPages = Math.ceil(allProducts.length / interval)
	//pull out Router history for navigation purposes
	const history = useHistory()

	

	useEffect(()=>{
		fetch('/auth/getProducts')
		.then(res=>res.json())
		.then(data=>{
			setStatus('loaded')
			setProducts(data)
		})
		.catch(e=>console.error(e))
	},[])

	

	const prod = allProducts.filter((prod,i)=>{
		const first = (page * interval) - interval
		const last = (page * interval) -1
		return i>=first && i<=last
	})
	let item 

	if(prodId!=="home"){
		item=prod.find(p=>p.id.toString()===prodId)
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
	      			prod.length<1?
	      				status==='loading'
	      					?<div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', fontSize:'2.5rem', fontFamily:'Ariel', color:'black', margin:'15rem auto'}}>
	      						<AiOutlineLoading3Quarters style={{marginRight:'2rem', color:'purple', animation:'rotate 1s ease-out'}}/>
	      						<p>{checkLang('Loading... Please wait','Even geduld a.u.b.')}</p>
	      					</div>
	      					:<div style={{display:'flex', justifyContent:'center', width:'100%', fontSize:'2.5rem', fontFamily:'Courier', color:'orangered', margin:'15rem auto'}}>
			      				{checkLang('No produts found','Geen artikelen gevonden')}
			      			</div>
	      			
	      			:null
	      		}

	      		{
	      			prod.map(prod=>{
	      				return(
	      					<div className='collectionPanel__item' key={`newcoll-${prod.id}`} onClick={()=>history.push(`/all/${prod.id}`)}>
								<div className='collectionPanel__item--name'>
									<p>{prod.name}</p>
								</div>
								<div className='collectionPanel__item--image'>
									<img src={prod.imageurl} alt={prod.name} />
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