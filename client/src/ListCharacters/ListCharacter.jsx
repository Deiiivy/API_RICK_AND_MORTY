import React from 'react'
import './listCharacter.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function ListCharacter() {
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
    <div className='listCharacter'>
      {
        lists.map((list) => (
          <div key={list._id}>
           <p>{list.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ListCharacter