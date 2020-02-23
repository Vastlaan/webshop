const uniqid = require('uniqid');

export default class User {
	constructor(email, password, name, surname, address, phone, gender){
		this.id = uniqid()
		this.password = password
		this.email = email
		this.name = name
		this.surname = surname
		this.address = address		//address is object {street: '', number:'', toe:'', postcode: /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i , city:''}
		this.phone = phone
		this.gender = gender
		this.purchaseHistory = [] // array of objects {date:'', productId:'', priceIncl:'', priceExcl:'', address:{}}
		this.watchedProducts = [] // array of productId
	}
}