import React, { useContext,useState } from 'react'
import noteContext from '../Context/notes/noteContext'


const Addnote = () => {
    const Context = useContext(noteContext);
    const {addNote} = Context;
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();//to prevent reloading of page
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
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
            <input type="text"   required className="form-control" value={note.title} id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlfor="description" className="form-label">Description</label>
            <input type="text"  required className="form-control" value={note.description} id="description" name="description" onChange={onChange }/>
          </div>
         
          <div className="mb-3">
            <label htmlfor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" value={note.tag} id="tag" name="tag" onChange={onChange }/>
          </div>
         
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
        </form>
        <h1>Your notes</h1>
      </div>
    </div>
  )
}

export default Addnote
