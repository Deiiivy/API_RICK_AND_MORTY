import React from 'react'
import './sliderBar.css'
import { Link } from 'react-router-dom'

function SliderBar() {
  return (
    <div className='SliderBar'>
        <Link to="/">Home</Link>
        <Link to="/list">List Characters</Link>
        <Link to="/create">Create Character</Link>
    </div>
  )
}

export default SliderBar