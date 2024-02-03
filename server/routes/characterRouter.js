const express = require('express')
const route = express.Router()
const {getCharacter, createCharacter, updateCharacter, deleteCharacter, getCharacterById} = require('../controllers/character')

route.get('/getCharacter', getCharacter)
route.get('/getCharacterId/:id', getCharacterById)
route.post('/create', createCharacter)
route.put('/update/:id', updateCharacter)
route.delete('/delete/:id', deleteCharacter)

module.exports = route