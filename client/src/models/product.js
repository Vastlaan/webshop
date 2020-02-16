const uniqid = require('uniqid');

export default class Product{
	constructor( name, price,colors, description, sizes, categories, isPromoted, imageUrl, id ){
		this.id = id || uniqid()
		this.name=name
		this.price=price
		this.colors = colors
		this.description=description
		this.sizes=sizes
		this.categories=categories
		this.isPromoted = isPromoted
		this.imageUrl = imageUrl
		this.score = []
	}
}

//categories: ["bestsellers", sport", "new", "sale", "women", "men", "sweaters", "vest", "shirts", "underwear", "trousers", "suits", "jackets", "additions"]