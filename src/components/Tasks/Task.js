import React from "react";
import { FaTimes } from "react-icons/fa";
import { TiClipboard, TiInputChecked } from "react-icons/ti";
import { BsCardChecklist } from "react-icons/bs";
import Notes from "../Notes/Notes";
import AddNote from "../Notes/AddNote";
import "./task.css";
import "./task_icons.css";
const Task = ({
  task,
  onDelete,
  onToggle,
  onShowNotes,
  onShowAddNotes,
  onAddNote,
  onDeleteNote,
  onToggleNote,
}) => {
  function theClass() {
    if (task.showNotes) {
      return "notes-icon-active";
    } else if (task.notes.length > 0) {
      return "notes-icon-not-empty";
    } else {
      return "notes-icon";
    }
  }
  return (
    <div
      className={`card task ${task.finished ? "finished" : ""}`}
      // onDoubleClick={() => onToggle(task.id)}
      key={task.id}
    >
      <h3 className="card-title">
        {task.title}

        <FaTimes className="remove-icon" onClick={() => onDelete(task.id)} />
      </h3>

      <p className="card-text">
        {task.date}

        <TiInputChecked
          className={`${
            task.finished ? "mark-finished-icon-active" : "mark-finished-icon"
          }`}
          onClick={() => onToggle(task.id)}
        />
      </p>

      <h3 className="icons">
        <BsCardChecklist
          className={theClass()}
          onClick={() => onShowNotes(task.id)}
        />
        <TiClipboard
          className={
            task.showAddNotes ? "add-notes-icon-active" : "add-notes-icon"
          }
          onClick={() => onShowAddNotes(task.id)}
        />
      </h3>
      {task.showNotes && (
        <Notes
          className="notes"
          notes={task.notes}
          taskID={task.id}
          onDeleteNote={onDeleteNote}
          onToggleNote={onToggleNote}
        />
      )}
      {task.showAddNotes && <AddNote id={task.id} onAddNote={onAddNote} />}
    </div>
  );
};

export default Task;
