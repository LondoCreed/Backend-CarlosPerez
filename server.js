import express from 'express'
import "dotenv/config.js"
import "./config/database.js"

const server = express()
const PORT = process.env.PORT || 8080
const ready = () => console.log("The server is ready in " + PORT);
server.listen(PORT, ready)

server.get('/', (req, res) =>{
    res.send('Hello, World!')
})

server.get('/saludo', (req, res) =>{
    res.send('Hello, World this is new!')
})

console.log(process.env.PORT);
