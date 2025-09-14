import noteContext from '../Context/notes/noteContext'
import { useContext, useEffect, useRef, useState } from 'react'
import Noteitem from './Noteitem'

import Modal from './Modal'

const Notes = () => {
  const Context = useContext(noteContext);
  const { notes, getNote, editNote } = Context;
  const [note, setNote] = useState({ id: "", etitle: "", edesc: "", etag: "" })
  const ref = useRef(null)
  const refClose = useRef(null)
  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, [])
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }
  const handleClick = (e) => {
    console.log("updating the note", note);
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
        {notes.map(note => {
          return <Noteitem key={note._id} note={note} updateNote={updateNote} />
        })}
      </div>
    </>
  )
}

export default Notes
