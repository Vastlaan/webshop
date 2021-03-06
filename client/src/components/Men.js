import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Item from './Item'
import {renderDescription} from '../utils/renderDescription'

const CATEGORIES =  ["sweaters", "vests", "shirts", "underwear", "trousers", "suits", "jackets", "additions", "shoes"].sort((a,b)=>{
	if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})

const Men = (props) =>{

	useEffect(()=>{
		fetch('/auth/getProducts')
		.then(res=>res.json())
		.then(data=>setProducts(data))
		.catch(e=>console.error(e))
	},[])

	const [products, setProducts] = useState([])

	const prod = products.filter(prod=>prod.categories.includes('men'))
	const {prodId} = props.match.params
	const history = useHistory()

	let item 

	if(prodId!=="home"){
		item=prod.find(p=>p.id.toString()===prodId)
	}
	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}
	const claculatePrice =(price, tax) =>{
		return (Number(price) + (Number(price)*Number(tax))).toFixed(2)
	}

	return(
		<div  className='men'>

			{item?<Item item={item} lang={props.lang}/>:null}

			<h1 className='men__header'>{checkLang('Men Categories','Mannen Categories')}</h1>
			<div className='men__categories'>

				{
					CATEGORIES.map((cat,i)=>{
						return(
							<div key={`men-cat-${i}`} className='men__categories--each' onClick={()=>history.push(`/men/${cat}/home`)}>
								{cat}
							</div>
							)
					})
				}
			</div>

			<div className="newCollection">

	      	<h1 className="newCollection__header">{checkLang('Mostly chosen','Meest gekozen')}</h1>

	      	<div className='collectionPanel__collection' style={{flexWrap:'wrap', overflow:'hidden'}}>
	      		{
	      			prod.map((prod,i)=>{
	      				return(
	      					<div className='collectionPanel__item' key={`men-${i}-${prod.name}`} onClick={()=>history.push(`/men/${prod.id}`)}>
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
									<div onClick={()=>history.push(`/men/${prod.id}`)}>
										<p>{checkLang('Shop now','Shop nu')}</p>
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