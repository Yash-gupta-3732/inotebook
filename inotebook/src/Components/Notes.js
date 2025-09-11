import noteContext from '../Context/notes/noteContext'
import { useContext } from 'react'
import Noteitem from './Noteitem'

const Notes = () => {
    const Context = useContext(noteContext);
     // eslint-disable-next-line 
    const {notes,setNotes} = Context;

  return (
    <div className='row my-3'>
      {notes.map(note=>{
          return <Noteitem key={note._id} note={note}/>
        })}
    </div>
  )
}

export default Notes
