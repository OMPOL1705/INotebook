import React, { useContext, useRef } from 'react';
import NotesContext from '../context/notes/NotesContext';

const Modal = ({ innerRef, ...props}) => {
    const context = useContext(NotesContext);
    const {editNote} = context;
    const {note, setNote} = props;
    const refClose = useRef(null)
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleClick = (e)=>{ 
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
    }
  return (
    <div>
        <button type="button" ref={innerRef} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} minLength={5} required aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} minLength={5} required onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} required/>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick}>Update Note</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Modal
