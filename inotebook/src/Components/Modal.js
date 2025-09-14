const Modal = (props) => {
  return (
    <div>

      <button ref={props.ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">EDIT NOTE</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlfor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" value={props.note.etitle} name="etitle" aria-describedby="emailHelp" onChange={props.onChange} />
                </div>
                <div className="mb-3">
                  <label htmlfor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" value={props.note.edescription} name="edescription" onChange={props.onChange} />
                </div>

                <div className="mb-3">
                  <label htmlfor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={props.note.etag} onChange={props.onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={props.refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={props.handleClick}>Update changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
