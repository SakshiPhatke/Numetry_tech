import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./index.css";

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, text) => {
    setNotes([...notes, { id: Date.now(), title, text }]);
  };

  const editNote = (id, updatedTitle, updatedText) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, title: updatedTitle, text: updatedText } : note)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      {/* Left side - Large Note Taking Box */}
      <div className="left-section">
        <h2>Create Note</h2>
        <NoteForm addNote={addNote} />
      </div>

      {/* Right side - Small Stored Notes */}
      <div className="right-section">
        <h2>All Notes</h2>
        <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
