import { useState } from "react";

function NoteItem({ note, editNote, deleteNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const handleEdit = () => {
    if (isEditing) {
      editNote(note.id, title, text);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-card">
      <div className="note-header">{isEditing ? <input value={title} onChange={(e) => setTitle(e.target.value)} /> : <h3>{note.title}</h3>}</div>
      <p>{isEditing ? <textarea value={text} onChange={(e) => setText(e.target.value)} /> : note.text}</p>
      <div className="note-buttons">
        <button className="edit-btn" onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NoteItem;
