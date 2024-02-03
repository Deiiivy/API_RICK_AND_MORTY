const characterModel = require("../models/character");

const getCharacter = async(req,res) => {
    try {
    const character = await characterModel.find()
    res.json(character)
    }catch (error) {
        console.log('error al obtener personajes');
        res.send('error al obtener personajes')
    }
}

const createCharacter = async(req,res) => {
    try {
        const {name, status, gender, species } = req.body;
        const newCharacter = new characterModel({
            name: name,
            status: status,
            gender: gender,
            species: species
        })
        await newCharacter.save()
        res.status(500).json({message: 'character created success'})
    } catch (error) {
        console.log('error created character');
        res.send('error created character')
    }
}

const getCharacterById = async(req,res) => {
    try {
        const character = await characterModel.findById(req.params.id)
        res.json(character)
    } catch (error) {
        console.log('error al obtener personaje');
        res.json({message: 'error al obtener pesonaje'})
    }
}

const updateCharacter = async(req,res) => {
    try {
        const {name, status, gender, species } = req.body;
        await characterModel.findByIdAndUpdate(req.params.id, {
            name,
            status,
            gender,
            species
        })
        res.json({message: 'user updated success'})
    } catch (error) {
        console.log('error al actualizar personaje');
        res.status(500).json({message: 'error al actualizar personaje'})
    }
}

const deleteCharacter = async(req,res) => {
    try {
        await characterModel.findByIdAndDelete(req.params.id)
        res.json({message: 'character delete success'})
    } catch (error) {
        console.log('error al eliminar personaje');  
        res.status(500).json({message: 'error al eliminar personaje '}) 
    }
}

module.exports = {getCharacter, createCharacter, updateCharacter, deleteCharacter, getCharacterById}