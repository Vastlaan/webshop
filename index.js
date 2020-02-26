const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

require('./queries')


const app = express()
app.use(bodyParser.json())

require('./authRoutes/login')(app)

if(process.env.NODE_ENV==='production'){

	app.use(express.static('client/build'));

	app.get('*',(req, res)=>{
		res.sendFile(path.resolve(__dirname,'client','build','index.html'))
	})
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
	console.log(`App is listening on port ${PORT}`)
})
