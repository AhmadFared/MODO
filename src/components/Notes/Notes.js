import React from "react";
import Note from "./Note";

const Notes = ({ notes, taskID, onDeleteNote, onToggleNote }) => {
  return (
    <>
      {notes.map((note) => (
        <Note
          note={note}
          taskID={taskID}
          onDeleteNote={onDeleteNote}
          onToggleNote={onToggleNote}
        />
      ))}
    </>
  );
};
export default Notes;
