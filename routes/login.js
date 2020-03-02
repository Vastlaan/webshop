const {getClients} = require('../queries')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')


 module.exports = async function login(req,res){

 	
 	const clients = await getClients()	//array of objects
	const credentials = req.body
	let u = undefined
	clients.map(user=>{
		if(user.email===credentials.email && user.password === credentials.password){
			u=user
			const token = jwt.sign({userId: user.id}, keys.JWT_SECRET, {expiresIn:"12h"})
			return res.status(200).json({
				user,
				token
			})
		}
	})
	if(!u){
		res.status(404).json({error: "User not found"})
	}
} 
