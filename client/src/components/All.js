import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Item from './Item'
import {renderDescription} from '../utils/renderDescription'



function All(props) {

	const history = useHistory()
	const [products, setProducts] = useState([])
	useEffect(()=>{
		fetch('/auth/getProducts')
		.then(res=>res.json())
		.then(data=>setProducts(data))
		.catch(e=>console.error(e))
	},[])

	const {prodId} = props.match.params

	let item 

	if(prodId!=="home"){
		item=products.find(p=>p.id.toString()===prodId)
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
	      			products.map(prod=>{
	      				return(
	      					<div className='collectionPanel__item' key={`all-${prod.id}`} onClick={()=> history.push(`/all/${prod.id}`)}>
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