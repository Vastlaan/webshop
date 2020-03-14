const {Pool} = require('pg')
const keys = require('../config/keys')

const pool = new Pool({
	user: keys.DATABASE_USER,
	host: keys.DATABASE_HOST,
	database: keys.DATABASE_NAME,
	password: keys.DATABASE_SECRET,
	port: keys.DATABASE_PORT,
})

async function getClients(){
	const res = await pool.query('SELECT * FROM clients')
	const clientsArray = res.rows
	return clientsArray
}

async function updateClientRecentItems(data){
	try{
		const maxProducts = 5
		const client = await pool.query(`SELECT * from clients WHERE id = ${data.userId}`)
		//retrive watchedproduts array from res from above query
		const wp = client.rows[0].watchedproducts
		//already exist in array 
		if(wp.includes(data.item)){
			console.log('here I was')
			return client.rows[0]
		}
		//recent products too long
		if(wp.length>=maxProducts){
			wp.shift()
			wp.push(data.item)
			let newArray = '\'{'
			wp.map((w,i)=>{
				if(i+1 === wp.length){
					newArray = newArray+`${w}}'`
				}else if(w===''){
					newArray=newArray+''
				}
				else{
					newArray = newArray+`${w},`
				}
				
			})
			
			const res = await pool.query(`UPDATE clients SET watchedproducts = ${newArray} WHERE id = ${data.userId} RETURNING * `)
			return res.rows[0]
		}
		// syntax to add value to array dont forget to check by id, otherwise it update all clients
		const res = await pool.query(`UPDATE clients SET watchedproducts = watchedproducts || '{${data.item}}' WHERE id = ${data.userId} RETURNING * `)
		
		return res.rows[0]

	}catch(e){
		console.log(e)
		return {error:e}
	}
	
}

async function registerNewClient({email,password}){
	const address = `{"street":"", "number" : "", "toe": "", "postcode": "", "city":""}`
	const res= await pool.query(`INSERT INTO clients ( email, password,name,surname,address,phone,gender,purchasehistory,watchedproducts, created_on) VALUES ('${email}', '${password}', '', '',  '${address}', '', '', ARRAY[''],ARRAY[''], NOW()) RETURNING *`)
	console.log(res.rows)
	return res.rows
}

async function createProductsTable(productsArray){
	const query = `CREATE TABLE products(id SERIAL PRIMARY KEY, name VARCHAR(100) , price VARCHAR(20) , colors TEXT[], sizes TEXT[], categories TEXT[] ,images TEXT[], description VARCHAR(10000), isPromoted BOOLEAN, imageUrl VARCHAR(500) )`
	const res = await pool.query(query)
	console.log(res.rows)
	return res.rows
}

async function addProduct(values){

	const query = `INSERT INTO products(name, price, colors, sizes, categories, images, description, isPromoted, imageUrl) VALUES(${values}) RETURNING *`
	const res = await pool.query(query)
	console.log(res.rows)
	return res.rows
}
async function getProd(){

	const query = `SELECT * FROM products`
	const res = await pool.query(query)
	console.log(res.rows)
	return res.rows
}


module.exports = {
	getClients,
	updateClientRecentItems,
	registerNewClient,
	createProductsTable,
	addProduct,
	getProd
}





































// const Users = [
// 	{
// 		email: "ml.antczak@gmail.com",
// 		password:"12345678",
// 		name:"Michal",
// 		surname:"Antczak",
// 		address:{
// 			street:"Oostervenne",
// 			number:"397",
// 			toe:'',
// 			postcode:'1444XN',
// 			city:'Purmerend'
// 		},
// 		phone:'0682307051',
// 		gender:'male'
// 	},
// 	{
// 		email: "grazyna@gmail.com",
// 		password:"12345678",
// 		name:"Grażyna",
// 		surname:"Antczak",
// 		address:{
// 			street:"Daal",
// 			number:"12",
// 			toe:'',
// 			postcode:'1432LP',
// 			city:'Amersfort'
// 		},
// 		phone:'0652444059',
// 		gender:'female'
// 	}
// ]

//============================================CREATE TABLE clients======================================================

// pool.query('CREATE TABLE clients(id SERIAL PRIMARY KEY, email VARCHAR(50) UNIQUE, password VARCHAR(100) NOT NULL , name VARCHAR(50), surname VARCHAR(50), address json NOT NULL , phone VARCHAR(50), gender VARCHAR(10), purchaseHistory TEXT[], watchedProducts TEXT[], created_on TIMESTAMP NOT NULL)', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

//============================================INSERT INTO clients Users ======================================================

// Users.map(user=>{
// 	const address = `{"street":"${user.address.street}", "number" : "${user.address.number}", "toe": "${user.address.toe}", "postcode": "${user.address.postcode}", "city":"${user.address.city}"}`
// 	console.log(address)
// 	pool.query(`INSERT INTO clients ( email, password,name,surname,address,phone,gender,purchasehistory,watchedproducts, created_on) VALUES ('${user.email}', '${user.password}', '${user.name}', '${user.surname}',  '${address}', '${user.phone}', '${user.gender}', ARRAY[''],ARRAY[''], NOW())`)
// })

//==============================================PROPER DECLARATION JSON and ARRAY=====================================================
//INSERT INTO clients ( email, password,name,surname,address,phone,gender,purchasehistory,watchedproducts, created_on) VALUES ('ml.antczak@gmail.com', '12345678', 'Michal', 'Antczak',  '{"street":"Oostervenne","number":"397","toe":"","postcode":"1444XN","city":"Purmerend"}', '0682307051', 'male', ARRAY[''],ARRAY[''], NOW());



//=============================================