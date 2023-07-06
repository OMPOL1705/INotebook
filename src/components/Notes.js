import React, { useContext, useEffect, useState, useRef } from 'react';
import NoteContext from '../context/notes/NotesContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, getNotes} = context;
    let history = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            history("/login");
        }
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
