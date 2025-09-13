import React, { useContext,useState } from 'react'
import noteContext from '../Context/notes/noteContext'


const Addnote = () => {
    const Context = useContext(noteContext);
    const {addNote} = Context;
    const [note, setNote] = useState({title:"",desc:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();//to prevent reloading of page
        addNote(note.title,note.description,note.tag);
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})

    }
  return (
    <div>
      <div className='container mx-3 my-3'>
        <h1>Add your notes</h1>
        <form>
          <div className="mb-3">
            <label htmlfor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlfor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onChange }/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
        </form>
        <h1>Your notes</h1>
      </div>
    </div>
  )
}

export default Addnote
