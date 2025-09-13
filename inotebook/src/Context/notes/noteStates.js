import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const initialnotes = [{ "_id": "68c17877ddef6823837ad779", "user": "68c174b63e18697def69d93f", "title": "my title", "description": "my description", "tag": "personal", "Date": "2025-09-10T13:09:11.578Z", "__v": 0 }, { "_id": "68c17b2eddef6823837ad77c", "user": "68c174b63e18697def69d93f", "title": "my title2", "description": "my description2", "tag": "personal", "Date": "2025-09-10T13:20:46.936Z", "__v": 0 }, { "_id": "68c17b37ddef6823837ad77e", "user": "68c174b63e18697def69d93f", "title": "my title3", "description": "my description3", "tag": "personal", "Date": "2025-09-10T13:20:55.704Z", "__v": 0 }, { "_id": "68c17b41ddef6823837ad780", "user": "68c174b63e18697def69d93f", "title": "my title4", "description": "my description4", "tag": "personal", "Date": "2025-09-10T13:21:05.742Z", "__v": 0 }]

    const [notes, setNotes] = useState(initialnotes)

    // Add a note
    const addNote = (title, description, tag) => {
        //to do api call
        console.log("adding a new note");
        const note = {
            "_id": "68c17877ddef6823837ad779", "user": "68c174b63e18697def69d93f", "title": title, "description": description, "tag": tag, "Date": "2025-09-10T13:09:11.578Z", "__v": 0
        };
        setNotes(notes.concat(note));

    }

    // Delete a note    
    const deleteNote = (id) => {
         //to do api call
        console.log("deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = (id, title, description, tag) => {

    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;