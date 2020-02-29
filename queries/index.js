const {Pool} = require('pg')

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'claire',
	password: 'psychedryna66',
	port: 5432,
})

async function getClients(){
	const res = await pool.query('SELECT * FROM clients')
	const clientsArray = res.rows
	return clientsArray
}

async function updateClientRecentItems(data){
	console.log(data)
	//const res = await pool.query(`INSERT INTO clients (watchedproducts) VALUES (${data.item})`)
	return data.item
}


module.exports = {
	getClients,
	updateClientRecentItems
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