import React, { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {
  const host = "http://i-notebook-pi.vercel.app"
    let a = []
    const [notes,setNotes] = useState(a);

    const getNotes = async () => {
      // API Call 
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json()
      setNotes(json)
    }

    const addNote = async (title,description,tag) => {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag}), 
      });
      const note = response.json();
      setNotes(notes.concat(note));
    }

    const deleteNote = async (id) => {
      // eslint-disable-next-line
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      });
      // const json = response.json();
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }

    const editNote = async (id,title,description,tag) => {
       // eslint-disable-next-line 
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag}), 
      });
      // eslint-disable-next-line
      const json = await response.json();
      let newNotes = JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id === id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag; 
          break; 
        }
      }
      setNotes(newNotes);
    }    

    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500)
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes, alert, showAlert}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;