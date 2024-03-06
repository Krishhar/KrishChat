const express = require('express')
const env = require('dotenv')
const chats = require('./data/data')
const app = express()

app.get('/', (req, res) => {
    res.send('Running')
})

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) =>  c._id === req.params.id )
    res.send(singleChat)

})
PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`App is hosted in port ${PORT}`))