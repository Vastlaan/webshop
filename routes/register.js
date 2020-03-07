const {getClients, registerNewClient} = require('../queries')
const bcrypt = require('bcryptjs');


 module.exports = async function register(req,res){

 	const {email, password} = req.body
 	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);
 	
  	const clients = await getClients()	//array of objects

  	const userExist = clients.find(c=>c.email===email)

  	if(userExist){
  		return res.status(409).json({error:'Email address already exist'})
  	}

  	const updatedClients = await registerNewClient({email,password: hash})

  	if(updatedClients.error){
  		return res.status(409).json({error:updatedClients.error})
  	}
  	return res.status(200).json({success:'New account succesful reistered. Within 5 sec you will be redirected to the login page.'})


	// const credentials = req.body
	// let u = undefined
	// clients.map(user=>{
	// 	if(user.email===credentials.email && user.password === credentials.password){
	// 		u=user
	// 		const token = jwt.sign({userId: user.id}, keys.JWT_SECRET, {expiresIn:"12h"})
	// 		return res.status(200).json({
	// 			user,
	// 			token
	// 		})
	// 	}
	// })
	// if(!u){
	// 	res.status(404).json({error: "User not found"})
	// }
} 