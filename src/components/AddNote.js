import React from 'react'
import { useContext, useState } from 'react'
import noteContext from '../context/noteContext'

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = async (e) => {
    e.preventDefault();
    const success = await addNote(note.title, note.description, note.tag);
    if (success) {
      setNote({ title: "", description: "", tag: "" });
      props.showAlert("Added Successfully", "success");
    } else {
      props.showAlert("Failed to add note. Please login first.", "danger");
    }
  }

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  return (
    <div className="in-add-note-section">
      <div className="in-section-title">
        <span className="title-icon"><i className="fa-solid fa-plus"></i></span>
        Add a New Note
      </div>
      <div className="in-form-row">
        <div className="in-form-group">
          <label className="in-label" htmlFor="title">Title</label>
          <input
            type="text"
            className="in-input"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Note title..."
          />
        </div>
        <div className="in-form-group">
          <label className="in-label" htmlFor="description">Description</label>
          <input
            type="text"
            className="in-input"
            id="description"
            name="description"
            value={note.description}
            onChange={handleChange}
            placeholder="What's on your mind?"
          />
        </div>
        <div className="in-form-group">
          <label className="in-label" htmlFor="tag">Tag</label>
          <input
            type="text"
            className="in-input"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={handleChange}
            placeholder="e.g. Work, Personal..."
          />
        </div>
      </div>
      <button
        type="submit"
        className="in-btn-primary"
        onClick={handleClick}
        disabled={note.title.length < 1 || note.description.length < 1}
      >
        <i className="fa-solid fa-plus"></i> Add Note
      </button>
    </div>
  )
}

export default AddNote