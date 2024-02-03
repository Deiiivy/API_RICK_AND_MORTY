const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/characterRouter')
const app = express()
const PORT = 3006

app.use(express.json())
app.use(cors())

app.use('/manage/character', routes)

mongoose.connect('mongodb://127.0.0.1:27017/rick_and_morty')

app.get('/', (req, res) => {
    res.send('helloo world')
})

app.listen(PORT, () => console.log(`server at run in the port: ${PORT}`))

