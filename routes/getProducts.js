const {getProd} = require('../queries')

//THIS CANNOT BE IN FINAL CUSTOMER VERSION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
module.exports = async function getProducts(req,res){
	const products = await getProd()
	console.log(products)
	res.status(200).json(products)
}