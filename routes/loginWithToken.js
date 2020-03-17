const {getClients} = require('../queries')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

module.exports = async function loginWithToken(req,res){
	const credentials = req.body
	const clients = await getClients()
	
	if(credentials.token){
		try{
			const uId = jwt.verify(req.body.token, keys.JWT_SECRET)
	 		if(uId.userId){
	 			const user = clients.find(c=>c.id===uId.userId)
				return res.status(200).json({user})
			}else{
				return res.status(404).json({error:'User not found'})
			}
		}
		catch(e){
					return res.status(404).json({error:e})
		}
 	}
	
}