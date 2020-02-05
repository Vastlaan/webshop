const uniqid = require('uniqid');

export default class Product{
	constructor( name, price,colors, description, sizes, categories, isPromoted, imageUrl ){
		this.id = uniqid()
		this.name=name
		this.price=price
		this.colors = colors
		this.description=description
		this.sizes=sizes
		this.categories=categories
		this.isPromoted = isPromoted
		this.imageUrl = imageUrl
	}
}