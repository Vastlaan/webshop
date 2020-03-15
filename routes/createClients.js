const {createClientsTable} = require('../queries')

//THIS CANNOT BE IN FINAL CUSTOMER VERSION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
module.exports = async function createProducts(req,res){
	const createdTable = createClientsTable()
	return res.status(200).json(createdTable)
}