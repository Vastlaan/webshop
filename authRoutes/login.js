const {getClients} = require('../queries')


 module.exports = async function login(req,res){

 	const clients = await getClients()	//array of objects
	const epjson = req.body

	console.log(clients, epjson)
	let u = undefined
	clients.map(user=>{
		if(user.email===epjson.email && user.password === epjson.password){
			u=user
			return res.status(200).json(user)
		}
	})
	if(!u){
		res.status(404).json({error: "User not found"})
	}
} 
