import React from 'react'

export const initialState = {
	user: {},
	shoppingCart:[]
}
export const reducer =(state, action)=>{

	switch(action.type){

		case 'resetUser':
			return {
				user:initialState.user,
				shoppingCart: state.shoppingCart
			}
		case 'updateUser':
			return{
				user:action.payload,
				shoppingCart:state.shoppingCart
			}
		case 'addToShoppingBag':{

			let flag = false
			//newArray will be the same if the id of item doesnt exist already in shoppingCart
			// if id of item does already exist newArray will remain almost the same with raised amount of selected product
			const newArray = state.shoppingCart.map(each=>{
				if(each.item.id===action.payload[0].item.id){

					each.amount = each.amount+1||2
					flag=true

					return each
				}
				else{
					return each
				}
			})
			//if products amount has been raised, but no new product is added
			if(flag){
				return{
					user: state.user,
					shoppingCart: newArray
			}
			//if new product, then we spread old ShoppingCart array together with new product {item, selecedSize, selectedColorr, amount:1}
			}else{
				return{
					user: state.user,
					shoppingCart: [...newArray,...action.payload]
				}
			}
		}

		case 'removeItemFromShoppingCart':
			const newShoppingCart = state.shoppingCart.filter((each,i)=>{
				return each.item.id!==action.payload
			})
			return{
				user:state.user,
				shoppingCart: newShoppingCart
			}
		default:
			return{
				user:state.user,
				shoppingCart: state.shoppingCart
			}
	}
}
export const Context = React.createContext()