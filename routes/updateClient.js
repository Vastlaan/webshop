const {updateClientRecentItems} = require('../queries')


 module.exports = async function updateClient(req,res){
 	const updatedClient = await updateClientRecentItems(req.body)	//array of objects
 	res.status(200).json(updatedClient)
} 