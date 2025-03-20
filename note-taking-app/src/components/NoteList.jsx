import NoteItem from "./NoteItem";

function NoteList({ notes, editNote, deleteNote }) {
  return (
    <div className="note-list">
      <h2>All Notes</h2>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} editNote={editNote} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
