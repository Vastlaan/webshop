const {addProduct} = require('../queries')


//THIS CANNOT BE IN FINAL CUSTOMER VERSION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
module.exports = async function addProducts(req,res){
	const product = req.body
	let colors = 'ARRAY['
	product.colors.map((color, i)=>{
		if(i+1===product.colors.length){
			return colors = colors + `'${color}']`
		}
		return colors = colors + `'${color}',`
	})
	let sizes = 'ARRAY['
	product.sizes.map((size, i)=>{
		if(i+1===product.sizes.length){
			return sizes = sizes + `'${size}']`
		}
		return sizes = sizes + `'${size}',`
	})
	let categories = 'ARRAY['
	product.categories.map((cat, i)=>{
		if(i+1===product.categories.length){
			return categories = categories + `'${cat}']`
		}
		return categories = categories + `'${cat}',`
	})
	const images = 'ARRAY[\'\']'
	const isPromoted = product.isPromoted?'TRUE':'FALSE'
	
	let values = `'${product.name}', '${product.price}', ${colors}, ${sizes}, ${categories}, ${images}, '${product.description}', '${isPromoted}', '${product.imageUrl}'`
	console.log(values)
	const response = addProduct(values)
	return res.status(200).json({message:"Ok"})
}