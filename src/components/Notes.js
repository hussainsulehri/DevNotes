import React, { useRef, useState } from 'react'
import { useContext, useEffect } from 'react'
import noteContext from '../context/noteContext'
import AddNote from './AddNote'

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, deleteNote, editNote, getNotes } = context;
  const [showModal, setShowModal] = useState(false);

  const del = (id) => {
    deleteNote(id);
    props.showAlert("Deleted Successfully", "success");
  }

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    setNote({ id: currentNote._id, title: currentNote.title, description: currentNote.description, tag: currentNote.tag });
    setShowModal(true);
  }

  const [note, setNote] = useState({ id: "", title: "", description: "", tag: "" });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.title, note.description, note.tag);
    setShowModal(false);
    props.showAlert("Updated Successfully", "success");
  }

  return (
    <div>
      <AddNote showAlert={props.showAlert} />

      {/* Edit Modal */}
      {showModal && (
        <div className="in-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="in-modal" onClick={e => e.stopPropagation()}>
            <div className="in-modal-header">
              <h2 className="in-modal-title"><i className="fa-solid fa-pen-to-square me-2" style={{color:'#a5b4fc'}}></i>Edit Note</h2>
              <button className="in-modal-close" onClick={() => setShowModal(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="in-modal-body">
              <div className="in-form-group">
                <label className="in-label" htmlFor="modal-title">Title</label>
                <input type="text" className="in-input" id="modal-title" name="title" value={note.title} onChange={handleChange} placeholder="Note title..."/>
              </div>
              <div className="in-form-group">
                <label className="in-label" htmlFor="modal-description">Description</label>
                <input type="text" className="in-input" id="modal-description" name="description" value={note.description} onChange={handleChange} placeholder="Note description..."/>
              </div>
              <div className="in-form-group">
                <label className="in-label" htmlFor="modal-tag">Tag</label>
                <input type="text" className="in-input" id="modal-tag" name="tag" value={note.tag} onChange={handleChange} placeholder="Tag..."/>
              </div>
            </div>
            <div className="in-modal-footer">
              <button className="in-btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="in-btn-primary" onClick={handleClick}>
                <i className="fa-solid fa-floppy-disk"></i> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notes Section */}
      <div className="in-notes-header">
        <h2>Your Notes</h2>
        <span className="in-notes-count">{notes ? notes.length : 0}</span>
      </div>

      <div className="in-notes-grid">
        {notes && notes.length > 0 ? notes.map((note) => (
          <div className="in-note-card" key={note._id}>
            {note.tag && <span className="in-card-tag"><i className="fa-solid fa-tag" style={{fontSize:'0.6rem'}}></i> {note.tag}</span>}
            <h5 className="in-card-title">{note.title}</h5>
            <p className="in-card-text">{note.description}</p>
            <div className="in-card-actions">
              <button className="in-icon-btn in-icon-btn-delete" onClick={() => del(note._id)} title="Delete note">
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <button className="in-icon-btn in-icon-btn-edit" onClick={() => updateNote(note)} title="Edit note">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </div>
        )) : (
          <div className="in-empty-state">
            <div className="in-empty-icon">📝</div>
            <p>No notes yet. Add your first note above!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notes