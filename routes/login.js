const {getClients} = require('../queries')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
var bcrypt = require('bcryptjs');


 module.exports = async function login(req,res){
 	const clients = await getClients()	//array of objects
	const {email,password} = req.body
	const u = clients.find(user=> {
		return user.email===email && bcrypt.compareSync(password, user.password)
	})
	if(!u){
		res.status(404).json({error: "User not found"})
	}else{
		const token = jwt.sign({userId: u.id}, keys.JWT_SECRET, {expiresIn:"12h"})
		return res.status(200).json({
			user: u,
			token
		})
	}
} 
