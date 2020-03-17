import React, {useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import { Context } from '../store'
import {renderDescription} from '../utils/renderDescription'
import Page from './Page'


const BestsellersCollectionPanel = (props) =>{

	//this panel navigate to item through category "bestsellers" so path should be '/bestsellers/item_id'
	const [products, setProducts] = useState([])
	useEffect(()=>{
		fetch('/auth/getProducts')
		.then(res=>res.json())
		.then(data=>setProducts(data))
		.catch(e=>console.error(e))
	},[])
	const productsBestsellers = products.filter(prod=>prod.categories.includes("bestsellers"))
	const history = useHistory()
	const { store, dispatch } = useContext(Context)
	const [page, setPage] = useState(1)
	let prod = shuffle(productsBestsellers)
	//interval determine how many products display per page
	const interval = 3
	// determines number of pages based of amount of products and interval
	const maxPages = Math.ceil(productsBestsellers.length / interval)
	

	//check if user logged
	if(store.user.watchedproducts){
		//then make prod all products
		prod = products
		//and pick the one which id matches those in array of ids in watchedproducts array
		prod = prod.filter(p=> {
			return store.user.watchedproducts.includes(p.id.toString())
		})

	}
	//responsible for displaing proper products on each page
	prod = prod.filter((prod,i)=>{
		const first = (page * interval) - interval
		const last = (page * interval) -1
		return i>=first && i<=last
	})


	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}
	// algoritm to shuffle array
	function shuffle(a) {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
	    return a;
	}

	return(
		<div className='collectionPanel'>

			<div className='collectionPanel__header'>
				<h1>{store.user.watchedproducts?checkLang('Recently watched','Recent bekeken'):checkLang('Bestsellers','Bestsellers')}</h1>
			</div>
			<div className='collectionPanel__collection'>
			{
				prod.map((prod,i)=>{
						return(
							<div className='collectionPanel__item' key={`${i}-collpan-${prod.name}`} onClick={()=>history.push(`/all/${prod.id}`)}>
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
			<Page page={page} setPage={setPage} maxPages={maxPages} toTop={false}/>
		</div>
		)
}

export default BestsellersCollectionPanel