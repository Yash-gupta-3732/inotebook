import { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'

const Noteitem = (props) => {
    const { note } = props;
    const Context = useContext(noteContext);
    const {deleteNote} = Context;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div>
                    <i className="bi bi-trash mx-1" style={{color:'red'}} onClick={()=>deleteNote(note._id)}></i>
                    <i class="bi bi-pencil-square mx-1" style={{color:'blue'}}></i>
                    </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Noteitem
