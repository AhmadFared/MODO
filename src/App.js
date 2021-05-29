import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import AddTask from "./components/Tasks/AddTask";
import Tasks from "./components/Tasks/Tasks";

import {
  fetchTasks,
  deleteTheTask,
  toggleTheFinished,
  showTheAddNote,
  toggleTheNote,
  addTheTask,
} from "./components/Tasks/TasksManupilation";

import {
  addTheNote,
  deleteTheNote,
  toggleTheFinishedNote,
} from "./components/Notes/NotesManipulation";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const serverTasks = await fetchTasks();
      setTasks(serverTasks);
    };

    getTasks();
  }, []);

  // Delete Task
  const deleteTask = (id) => deleteTheTask(id, tasks, setTasks);

  // Toggle Finished
  const toggleFinished = (id) => toggleTheFinished(id, tasks, setTasks);

  // Show Add Notes
  const showAddNote = (id) => showTheAddNote(id, tasks, setTasks);

  // Toggle Note
  const toggleNote = (id) => toggleTheNote(id, tasks, setTasks);

  // Add a Task
  const addTask = (task) => addTheTask(task, tasks, setTasks);

  // Delete Note
  const deleteNote = (noteID, taskID) =>
    deleteTheNote(noteID, taskID, tasks, setTasks);

  // Toggle Finished Note
  const toggleFinishedNote = (noteID, taskID) =>
    toggleTheFinishedNote(noteID, taskID, tasks, setTasks);

  // Add a Note
  const addNote = (note, taskID) => addTheNote(note, taskID, tasks, setTasks);

  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <hr />
      <div className="content-container">
        <div>
          <AddTask onAdd={addTask} />
        </div>

        <div className="tasks-container">
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleFinished}
              onShowNotes={toggleNote}
              onShowAddNotes={showAddNote}
              onAddNote={addNote}
              onDeleteNote={deleteNote}
              onToggleNote={toggleFinishedNote}
            />
          ) : (
            "No Tasks To Show"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
