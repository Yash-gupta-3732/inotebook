import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const initialnotes = []

    const [notes, setNotes] = useState(initialnotes)

    //GET all notes
    const getNote = async () => {
        // API CALLS
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzE3NGI2M2UxODY5N2RlZjY5ZDkzZiIsImlhdCI6MTc1NzUwODg0NX0.oOcJsUSbPNe88CBorDanjKplrpivUVsPOn6VJQsnVBE"
            },

        });
        const json = await response.json();
        setNotes(json);
        console.log("notes", json)
    }

    // Add a note
    const addNote = async (title, description, tag) => {
        // API CALLS
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzE3NGI2M2UxODY5N2RlZjY5ZDkzZiIsImlhdCI6MTc1NzUwODg0NX0.oOcJsUSbPNe88CBorDanjKplrpivUVsPOn6VJQsnVBE"
            },
            body: JSON.stringify({ title, description, tag }),

        });
        console.log(response)

        //logic TO ADD IN CLIENT
        console.log("adding a new note");
        const note = await response.json();
        setNotes(notes.concat(note));

    }

    // Delete a note    
    const deleteNote = async (id) => {
        //to do api call// API CALLS
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzE3NGI2M2UxODY5N2RlZjY5ZDkzZiIsImlhdCI6MTc1NzUwODg0NX0.oOcJsUSbPNe88CBorDanjKplrpivUVsPOn6VJQsnVBE"
            },

        });
        const json = await response.json();
        console.log(json)

        //logic TO DELETE IN CLIENT
        console.log("deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // API CALLS
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzE3NGI2M2UxODY5N2RlZjY5ZDkzZiIsImlhdCI6MTc1NzUwODg0NX0.oOcJsUSbPNe88CBorDanjKplrpivUVsPOn6VJQsnVBE"
            },
            body: JSON.stringify({ title, description, tag }),

        });


        //logic TO EDIT IN CLIENT
        setNotes(notes.map(note =>
            note._id === id
                ? { ...note, title, description, tag }
                : note
        ));

    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;