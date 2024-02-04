import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SliderBar from './components/sliderBar/SliderBar'
import Home from './Home/Home'
import ListCharacter from './ListCharacters/ListCharacter'
import CreateCharacter from './createCharacter/CreateCharacter'

function App() {
  return (
   <div className='app-container'>
    <Router>
    <SliderBar />
    <div className='content'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list' element={<ListCharacter />} />
      <Route path='/create' element={<CreateCharacter />} />
    </Routes>
    </div>
    </Router>
   </div>
  )
}

export default App
