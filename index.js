let express = require('express')

let app = express()

app.get('/', (req, res)=>{
	res.send('Beginning of the project')
})

app.listen(9000, ()=>{
	console.log('Listening on port 9000')
})