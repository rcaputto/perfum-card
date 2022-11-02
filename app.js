const express = require ('express')
const path = require ('path')
const app = express ()
const publicPath = path.join (__dirname, '/public')
let port = 3000
app.use (express.static(publicPath))

app.listen (port, () => {
    console.log ('Servidor funcionando en puerto ' + port)
})

app.get ('/', (req, res) =>{
    res.sendFile (path.join(__dirname, '/views/home.html'))
})



