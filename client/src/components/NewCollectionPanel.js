import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {Products} from '../data/Products'
import {renderDescription} from '../utils/renderDescription'
import Page from './Page'


const NewCollectionPanel = (props) =>{

	//this panel navigate to item through category "new" so path should be '/new/item_id'
	const [products, setProducts] = useState([])
	useEffect(()=>{
		fetch('/auth/getProducts')
		.then(res=>res.json())
		.then(data=>setProducts(data))
		.catch(e=>console.error(e))
	},[])
	const productsNew = products.filter(prod=>prod.categories.includes("new"))
	const history = useHistory()

	const [page, setPage] = useState(1)

	//interval determine how many products display per page
	const interval = 3
	// determines number of pages based of amount of products and interval
	const maxPages = Math.ceil(productsNew.length / interval)
	//responsible for displaing proper products on each page
	const prod = productsNew.filter((prod,i)=>{
		const first = (page * interval) - interval
		const last = (page * interval) -1
		return i>=first && i<=last
	})

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		<div className='collectionPanel'>

			<div className='collectionPanel__header'>
				<h1>{checkLang('New Collection','Nieuwe Collectie')}</h1>
			</div>
			<div className='collectionPanel__collection' id='newCollectionPanel'>
			{
				prod.map(prod=>{
						return(
							<div className='collectionPanel__item' key={`collpan-${prod.id}`} onClick={()=>history.push(`/new/${prod.id}`)}>
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
									<div onClick={()=>history.push(`/new/${prod.id}`)}>
										<p>{checkLang('Shop now','Shop nu')}</p>
									</div>
								</div>
								
								
								
							</div>
						)
				})
			}
			</div>
			<Page page={page} setPage={setPage} maxPages={maxPages} toTop={false}/>
		</div>
		)
}

export default NewCollectionPanel