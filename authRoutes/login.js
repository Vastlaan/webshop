 module.exports = function login(app){
	app.post('/auth/login', (req,res)=>{
		const epjson = JSON.stringify(req.body)
		console.log(epjson)
		return res.status(200).json({'message':'yes'})
	})
} 
