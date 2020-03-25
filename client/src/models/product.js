const uniqid = require('uniqid');

export default class Product{
	constructor( name, price, tax, colors, description, sizes, categories, isPromoted, imageUrl, amountInStock, id ){
		this.id = id || uniqid()
		this.name=name
		this.tax=tax
		this.price=price
		this.colors = colors
		this.description=description
		this.sizes=sizes
		this.categories=categories
		this.isPromoted = isPromoted
		this.imageUrl = imageUrl
		this.amountInStock = amountInStock
		this.images = []
		this.score = []
		
	}
}

//categories: ["bestsellers", sport", "new", "sale", "women", "men", "sweaters", "vests", "shirts", "dresses", "underwear", "trousers", "suits", "jackets", "additions"]