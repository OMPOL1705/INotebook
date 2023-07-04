import React, { useContext, useEffect, useState, useRef } from 'react';
import NotesContext from '../context/notes/NotesContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import Modal from './Modal';

const Notes = () => {
    const context = useContext(NotesContext);
    const {notes, getNotes} = context;
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line 
    }, [])

    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})
    const modalRef = useRef(null);

    const updateNote = (currentNote) => {
        if (modalRef.current) {
            modalRef.current.click();
        }
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }
    return (
        <>    
        <Addnote />
        <Modal note={note} setNote={setNote} innerRef={modalRef}/>
        <h2>Your Notes</h2>
        <div className="container"> 
            {notes.length===0 && 'No notes to display'}
        </div>
        <div className="row">
            {notes.map((note)=>{
                return <div className="col-md-3">
                     <Noteitem key={note._id} updateNote={updateNote} note={note}/>
                </div>
            })}
        </div>
        </>
    )
}

export default Notes
