const UserRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const express = require('express')
const env = require('dotenv')
const chats = require('./data/data')
const ConnBD = require('./db')
const app = express()
const {notFound, errorHandler} = require('./middleWare/errorHandlers')

env.config()

ConnBD()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Running')
}) 

app.use('/api/user', UserRoutes)
app.use('/api/chat', chatRoutes)

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat)

})

app.use(notFound)
app.use(errorHandler)

PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`App is hosted in port ${PORT}`))