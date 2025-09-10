import noteContext from '../Context/notes/noteContext'
import React,{ useContext } from 'react'
import Noteitem from './Noteitem'

const Notes = () => {
    const Context = useContext(noteContext);
    const {notes,setNotes} = Context;
  return (
    <div className='row my-3'>
      {notes.map(note=>{
          return <Noteitem note={note}/>
        })}
    </div>
  )
}

export default Notes
