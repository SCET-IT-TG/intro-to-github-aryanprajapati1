import React, { useState } from "react";

function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: new Date().getTime(),
      text: note,
      timestamp: new Date().toLocaleString(),
    };
    setNotes([...notes, newNote]);
    setNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h2>Notes</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} />{" "}
        <br />
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text} - <small>{note.timestamp}</small>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
