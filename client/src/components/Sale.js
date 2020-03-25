import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Item from './Item'
import {renderDescription} from '../utils/renderDescription'
import Page from './Page'


function Sale(props) {

	const {prodId} = props.match.params
	const [products, setProducts] = useState([])
	useEffect(()=>{
		fetch('/auth/getProducts')
		.then(res=>res.json())
		.then(data=>setProducts(data))
		.catch(e=>console.error(e))
	},[])
	const allProducts = products.filter(prod=>prod.categories.includes('new'))
	const interval = 3
	const maxPages = Math.ceil(allProducts.length / interval)
	//pull out Router history for navigation purposes
	const history = useHistory()

	const [page, setPage] = useState(1)

	const prod = allProducts.filter((prod,i)=>{
		const first = (page * interval) - interval
		const last = (page * interval) -1
		return i>=first && i<=last
	})
	
	let item 

	if(prodId!=="home"){
		item=allProducts.find(p=>p.id.toString()===prodId)
	}
	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}
	const claculatePrice =(price, tax) =>{
		return (Number(price) + (Number(price)*Number(tax))).toFixed(2)
	}

	return(
		 <div className="newCollection" style={{marginTop: '17rem', paddingTop:'5rem'}}>
		      
	      	
	      	{item?<Item item={item} lang={props.lang}/>:null}

	      	<h1 className="newCollection__header">Sale</h1>

	      	<div className='collectionPanel__collection' style={{flexWrap:'wrap', overflow:'hidden'}}>
	      		{
	      			prod.map(prod=>{
	      				return(
	      					<div className='collectionPanel__item' key={`sale-${prod.name}`} onClick={()=>history.push(`/new/${prod.id}`)}>
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
									<p> &euro; {claculatePrice(prod.price, prod.tax)}</p>
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

export default Sale;