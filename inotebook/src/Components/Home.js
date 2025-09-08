import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'

const Home = () => {
  const a = useContext(noteContext)
  return (
    <div>
      <h1>This is {a.name} Home</h1>
    </div>
  )
}

export default Home
