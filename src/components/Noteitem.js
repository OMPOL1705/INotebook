import React, { useContext } from 'react';
import NoteContext from '../context/notes/NotesContext';

const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote, showAlert} = context;
    const {note, updateNote} = props;

  return (
    <div className='row-md-3 my-2 mx-4'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id); showAlert("Note has been successfully deleted", "success");}}></i>
                <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
            </div>
        </div>
    </div>
  )
}

export default Noteitem
