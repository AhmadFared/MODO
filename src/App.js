import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';


function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const serverTasks = await fetchTasks()
      setTasks(serverTasks)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const result = await fetch('http://localhost:4000/tasks')
    const data = await result.json()

    return data
  }
  // Fetch Task
  const fetchTask = async (id) => {
    const result = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = await result.json()
  
    return data
  }

  // Delete Task
  const deleteTask = async (id) =>  {
    await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Finished
  const toggleFinished= async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask =  { ...taskToToggle,
      finished: !taskToToggle.finished}
    
    const result = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await result.json()

    setTasks(tasks.map((task) =>
       task.id===id ? 
        { ...task, finished: data.finished } : 
          task))
  }

  // Show Add Notes
  const showAddNote = (id) => {
    setTasks(tasks.map((task) => task.id===id
    ? {...task, showAddNotes: !task.showAddNotes } : task))
  }

  // Toggle Note
  const toggleNote = (id) => {
    setTasks(tasks.map((task) => task.id===id
    ? {...task, showNotes: !task.showNotes } : task))
  }

  // Add a Task
  const addTask = async (task) =>{

    const result = await fetch ('http://localhost:4000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await result.json() 
    setTasks([...tasks, data])
  }

  // Add a Note
  const addNote = async (note,id) => {

    // Note ID
    const noteID = (Math.floor(Math.random() * 100) + Date.now() )
    const newNote = {noteID, ...note}

    // toggle and update task
    const taskToToggle = await fetchTask(id) 
    const updTask = { ...taskToToggle, notes: [...taskToToggle.notes, newNote]}

    const result = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await result.json()

    setTasks((tasks.map( (task) => 
      task.id === id 
        ? {...task, notes: data.notes } 
        : {...task} ) ))
  }


  // Delete a note
  const deleteNote = async (noteID, taskID) => {
    // task to toggle
    const taskToToggle = await fetchTask(taskID)

    const updTask = {...taskToToggle, notes: [...taskToToggle.notes.filter((note) => note.noteID !== noteID)]}
    
    const result = await fetch (`http://localhost:4000/tasks/${taskID}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await result.json()

    setTasks(tasks.map((task) => 
      task.id === taskID 
        ? {...task, notes: data.notes} 
        : {...task}  ))
  }


  // Toggle finished note
  const toggleFinishedNote = async (noteID, taskID) => {
    
    // task To Toggle
    const taskToToggle = await fetchTask(taskID)
    
    const updTask = {...taskToToggle, notes: taskToToggle.notes.map((note) => note.noteID === noteID ? {...note, noteFinished : !note.noteFinished} : {...note})}

    const result = await fetch (`http://localhost:4000/tasks/${taskID}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await result.json()
    
    setTasks(tasks.map((task) => 
      task.id === taskID 
        ? {...task, notes: data.notes} 
        : {...task}  ))
  }

  return (
    <div className="container">
      
        <div className="header">
        <Header />
        </div>
        <hr />
      <div className="container-2">
        <div className="add-task">

        <AddTask onAdd={addTask}/>
        </div>

        <div className="tasks">
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
          />) : (
            'No Tasks To Show'
          ) 
        }
        </div>
      </div>
    </div>
  );
}

export default App;
