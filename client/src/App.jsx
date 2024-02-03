import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SliderBar from './components/sliderBar/SliderBar'

function App() {
  const[lists, setList] = useState([])

  useEffect(()=> {
    const getCharacter = async() => {
      const response = await axios.get('https://rickandmortyapi.com/api/character')
      setList(response.data.results)
      console.log(response.data.results);
    }
    getCharacter()
  },[])
  return (
   <div>
    <SliderBar />
    {
      lists.map((list) => (
        <div key={list._id}>
          <h1>name: {list.name}</h1>
          <h2>status: {list.status}</h2>
        </div>
      ))
    }
   </div>
  )
}

export default App
