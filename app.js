const express = require('express')
//app de Express
const app = express()
app.use(express.json())//Indicamos que usaremos JSON
//Puerto en que vamos a ver nuestra app: localhost: 3000
const port = 3000

//routes


//con sto inicializamos la app
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})