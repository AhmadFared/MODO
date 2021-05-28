import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { TiInputChecked } from 'react-icons/ti';


const Note = ({ note, taskID, onDeleteNote, onToggleNote}) => {
  return (
    <div
      className={`card note ${note.noteFinished ? 'finished':''}`}
      // onDoubleClick={() => onToggleNote(note.id)}
      key={note.noteID} >

      <p className="card-text">
        {note.noteText}
        <TiInputChecked 
            className={`${note.noteFinished ? 'mark-note-finished-icon-active' : 'mark-note-finished-icon'}`}
            onClick= {() => onToggleNote(note.noteID, taskID)}
        />

        <FaTimes 
          className="remove-icon"
          onClick={() => onDeleteNote(note.noteID, taskID)} 
        />
      </p>      
    </div>
  )
}

export default Note
