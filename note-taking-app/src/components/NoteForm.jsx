import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && text.trim()) {
      addNote(title, text);
      setTitle("");
      setText("");
    }
  };

  return (
    <div className="note-form">
      <h2>Create Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter Note"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button type="submit">
          Note <FaPlusCircle />
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
