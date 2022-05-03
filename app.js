const express = require('express')
//app de Express
const app = express()
app.use(express.json())//Indicamos que usaremos JSON
//Puerto en que vamos a ver nuestra app: localhost: 3000
const port = 3000

//routes
//Methods HTTP
app.get('/v1/explorers/',(req, res) =>{
    console.log(`GET EXPLORERS V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "Lis1"}
    const explorer2 = {id: 2, name: "Lis2"}
    const explorer3 = {id: 3, name: "Lis3"}
    const explorer4 = {id: 4, name: "Lis4"}
    const explorer5 = {id: 5, name: "Lis5"}
    const explorers = [explorer1,explorer2,explorer3,explorer4,explorer5]
    //HTTP CODE STATUS: 200
    res.status(200).json(explorers)//nos indicara el error que tiene
})

//con sto inicializamos la app
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})