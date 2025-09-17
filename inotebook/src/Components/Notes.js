import noteContext from '../Context/notes/noteContext'
import { useContext, useEffect, useRef, useState, } from 'react'
import Noteitem from './Noteitem'
import emptybox from '../Asset/emptybox.gif'
import { useNavigate } from 'react-router-dom'

import Modal from './Modal'

const Notes = () => {
  const navigate = useNavigate();
  const Context = useContext(noteContext);
  const { notes, getNote, editNote } = Context;
  const [note, setNote] = useState({ id: "", etitle: "", edesc: "", etag: "" })
  const ref = useRef(null)
  const refClose = useRef(null)
      useEffect(() => {
        if(localStorage.getItem('token')){
          getNote();
        }
        else{
          navigate("/login")
        }

    // eslint-disable-next-line
  }, [])
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }
  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click(); //to close the modal programmatically

  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })

  }

  return (
    <>
      <Modal ref={ref} note={note} refClose={refClose} handleClick={handleClick} onChange={onChange} />
      <div className='row my-3'>
        <div className='container d-flex justify-content-center' > {notes.length === 0 && <img src={emptybox} style={{ width: "300px" }} alt="No notes to display" />}</div>
        {notes.map(note => {
          return <Noteitem key={note._id} note={note} updateNote={updateNote} />
        })}
      </div>
    </>
  )
}

export default Notes
