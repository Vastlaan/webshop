import React from 'react'
import {Products} from '../data/Products'


const NewCollectionPanel = (props) =>{

	return(
		<div className='newCollectionPanel'>
			{
				Products.map(prod=>{
					return(
						<div>
							<p>{prod.name}</p>
							<p>{prod.price}</p>
							<p>{prod.description}</p>
						</div>
						)
				})
			}
		</div>
		)
}

export default NewCollectionPanel