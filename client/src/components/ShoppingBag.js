import React, {useContext} from 'react'
import {  Context } from '../store'
import {Link, useHistory} from 'react-router-dom';



const ShoppingBag =(props)=>{

	const history = useHistory()

	const { store, dispatch } = useContext(Context)
      const {shoppingCart} = store
      //shoppingCart is Array of objects [{item, selectedSize, selectedColor, amount}, {item, selectedSize, selectedColor, amount},  ...]

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}
	const total = shoppingCart.reduce((acc, item)=>{ return Number(acc)+(Number(item.item.price)*item.amount)},0)

	return(
		<div className='shoppingBag' style={{marginTop:'22rem'}}>
			<div className='shoppingBag__header'>
				<h1>{checkLang('Shopping Bag','Winkelmaand')}</h1>
			</div>
			<div className='shoppingBag__table'>
				<div className='shoppingBag__table--grid bbg'>
					<div className='shoppingBag__table--grid-product shoppingBag__table--grid-each'>
						<p>{checkLang('Product','Artikel')}</p>
					</div>
					<div className='shoppingBag__table--grid-size shoppingBag__table--grid-each'>
						<p>{checkLang('Size','Maat')}</p>
					</div>
					<div className='shoppingBag__table--grid-amount shoppingBag__table--grid-each'>
						<p>{checkLang('Amount','Aantal')}</p>
					</div>
					<div className='shoppingBag__table--grid-subtotal shoppingBag__table--grid-each'>
						<p>{checkLang('Subtotal','Subtotaal')}</p>
					</div>
				</div>
				{
					shoppingCart.length>0
					?<div>
						{
							shoppingCart.map((item,i)=>{
								return(
									<div className='shoppingBag__table--grid' key={`${i}-wm-tb-e-${i*13.79}`}>
										<div className='shoppingBag__table--grid-product shoppingBag__table--grid-each'>
											<p>{item.item.name}</p>
										</div>
										<div className='shoppingBag__table--grid-size shoppingBag__table--grid-each'>
											<p>{item.selectedSize}</p>
										</div>
										<div className='shoppingBag__table--grid-amount shoppingBag__table--grid-each'>
											<p>{item.amount || 1}</p>
										</div>
										<div className='shoppingBag__table--grid-subtotal shoppingBag__table--grid-each'>
											<p>{item.item.price * item.amount||item.item.price}</p>
										</div>
									</div>
								)
							})
						}
					</div>
					:<div className='shoppingBag__table--grid'>
						<p className='shoppingBag__table--grid-all shoppingBag__table--grid-each'>{checkLang('There are no products in Shopping Bag.','Er zijn geen artikelen in Winkelmaand.')}</p>
					</div>
				}
			
			</div>

			<div className='shoppingBag__total'>
				<h3>{checkLang('Total','Totaal')}</h3>
				{total.toFixed(2)}
			</div>
			
		</div>
		)
}

export default ShoppingBag