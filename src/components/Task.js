import React from 'react';
import { FaTimes } from 'react-icons/fa'
import { TiClipboard, TiInputChecked } from 'react-icons/ti'
import { AiOutlineBook,} from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import Notes from './Notes';
import AddNote from './AddNote'


const Task = ({ task, onDelete, onToggle, onShowNotes, onShowAddNotes, onAddNote, onDeleteNote, onToggleNote}) => {
  return (
    
    <div
      className={`card task ${task.finished ? 'finished':''}`}
      // onDoubleClick={() => onToggle(task.id)}
      key={task.id}  
    >
        <h3 className="card-title">
          {task.title}

          <FaTimes 
            className="remove-icon"
            onClick={() => onDelete(task.id)} 
          />
        </h3>

        <p className="card-text">
          {task.date}

          <TiInputChecked 
              className={`${task.finished ? 'mark-finished-icon-active' : 'mark-finished-icon'}`}
              onClick= {() => onToggle(task.id)}
          />

        </p>
        
      <h3 className="icons">
          
        <BsCardChecklist 
            className={ (task.showNotes)  ? "notes-icon-active"  : "notes-icon"}
            onClick={() => onShowNotes(task.id)}
        />
{/* || task.notes.length >0 */}
        <TiClipboard 
            className="add-notes-icon"
            onClick={() => onShowAddNotes(task.id)}
        />
      </h3>
      {task.showNotes && 
        <Notes 
          className="notes"
          notes={task.notes} 
          taskID={task.id}
          onDeleteNote={onDeleteNote} 
          onToggleNote={onToggleNote}
        />
      }
      {task.showAddNotes && 
        <AddNote 
          id = {task.id}
          onAddNote = {onAddNote}
        />
      }
    </div>
  )
  }


export default Task
