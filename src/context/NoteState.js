import React, { useState } from 'react'
import noteContext from './noteContext'

const NoteState = (props) => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const notesinital = [];

    const [notes, setNotes] = useState(notesinital);


    const getNotes = async () => {
        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method:   'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });
            if (response.ok) {
                const json = await response.json();
                setNotes(json);
            } else {
                console.error("Failed to fetch notes:", response.statusText);
                // Do not setNotes([]) here so that hardcoded notes persist if fetch fails

            }
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    }


    const addNote = async (title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description, tag })
            });

            if (response.ok) {
                const json = await response.json();
                console.log(json);
                const note = json.note;
                setNotes(notes.concat(note));
                return true;
            } else {
                const errorText = await response.text();
                console.error("Failed to add note:", errorText);
                return false;

                // For demo purposes (since user skipped login), add note locally even if fetch fails
                // const note = {
                //     "_id": Date.now().toString(), // Temporary ID
                //     "title": title,
                //     "description": description,
                //     "tag": tag,
                // }
                // setNotes(notes.concat(note));
            }
        } catch (error) {
            console.error("Error adding note:", error);
            return false;
        }
    }


    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        if (response.ok) {
            const newNotes = notes.filter((note) => note._id !== id);
            setNotes(newNotes);
        } else {
            console.error("Failed to delete note");
        }
    }

    const editNote = async (id, title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description, tag })
            });

            if (response.ok) {
                const json = await response.json();
                console.log(json);
                const newNotes = notes.map((note) => note._id === id ? { ...note, title, description, tag } : note);
                setNotes(newNotes);
            } else {
                console.error("Failed to edit note:", response.statusText);
            }
        } catch (error) {
            console.error("Error editing note:", error);
        }
    }


    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }} >
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState