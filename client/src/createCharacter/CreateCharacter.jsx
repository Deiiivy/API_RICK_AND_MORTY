import React from 'react'
import {useQuery, gql} from '@apollo/client'

const CONSULT_CHARACTER = gql `
query ($code: ID!){
  character(id: $code) {
    name
    status
    gender
  }
}
`

function CreateCharacter() {
  const {data, loading,error} = useQuery(CONSULT_CHARACTER,{
    variables: {code: 1}
  })
  
  if(loading) return <div>loading...</div>
  if(error) return <div>error</div>
  return (
    <div>
      <form>
        <label>ID:</label>
        <input type="number" placeholder='id'/>
        <br />
        <label>Nombre:</label>
        <input type="text" placeholder='name'/>
        <br />
        <label>Status: </label>
        <input type="text" placeholder='status'/>
        <br />
        <label >gender: </label>
        <input type="text" placeholder='gender'/>
        <br />
        <button type='submit'>Crear</button>
      </form>
    </div>
  )
}

export default CreateCharacter