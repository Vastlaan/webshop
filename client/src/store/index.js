import React from 'react'

export const initialState = {
	user: {},
	shoppingCart:{}
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
		case 'updateUserRecentItems':{
			fetch('/updateUser', (req,res)=>{

			})
			return{
				user: null ,
				shoppingCart:state.shoppingCart
			}
		}
	}
}
export const Context = React.createContext()