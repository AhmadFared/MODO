import React from "react";
import { useState } from "react";
// import "./notes.css";
// import "../form.css";
// import "../btn.css";

const AddNote = ({ id, onAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteFinished, setNoteFinished] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!noteText) {
      alert("please add a note");
      return;
    }

    onAddNote({ noteText, noteFinished }, id);

    setNoteText("");
    setNoteFinished(false);
  };
  return (
    <form className="add-form add-note" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Note</label>
        <input
          type="text"
          placeholder="Add Note"
          id="note"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
      </div>

      <input type="submit" value="save Note" className="button button-block" />
    </form>
  );
};

export default AddNote;
