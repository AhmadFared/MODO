// Fetch Task
const fetchTask = async (id) => {
  const result = await fetch(`http://localhost:4000/tasks/${id}`);
  const data = await result.json();

  return data;
};

// Delete a note
async function deleteTheNote(noteID, taskID, values, setValues) {
  // task to toggle
  const taskToToggle = await fetchTask(taskID);

  const updTask = {
    ...taskToToggle,
    notes: [...taskToToggle.notes.filter((note) => note.noteID !== noteID)],
  };

  const result = await fetch(`http://localhost:4000/tasks/${taskID}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updTask),
  });

  const data = await result.json();

  setValues(
    values.map((task) =>
      task.id === taskID ? { ...task, notes: data.notes } : { ...task }
    )
  );
}

// Toggle finished note
async function toggleTheFinishedNote(noteID, taskID, values, setValues) {
  // task To Toggle
  const taskToToggle = await fetchTask(taskID);

  const updTask = {
    ...taskToToggle,
    notes: taskToToggle.notes.map((note) =>
      note.noteID === noteID
        ? { ...note, noteFinished: !note.noteFinished }
        : { ...note }
    ),
  };

  const result = await fetch(`http://localhost:4000/tasks/${taskID}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updTask),
  });

  const data = await result.json();

  setValues(
    values.map((task) =>
      task.id === taskID ? { ...task, notes: data.notes } : { ...task }
    )
  );
}

// Add a Note
async function addTheNote(note, taskID, values, setValues) {
  // Note ID
  const noteID = Math.floor(Math.random() * 100) + Date.now();
  const newNote = { noteID, ...note };

  // toggle and update task
  const taskToToggle = await fetchTask(taskID);
  const updTask = {
    ...taskToToggle,
    notes: [...taskToToggle.notes, newNote],
  };

  const result = await fetch(`http://localhost:4000/tasks/${taskID}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updTask),
  });

  const data = await result.json();

  setValues(
    values.map((task) =>
      task.id === taskID ? { ...task, notes: data.notes } : { ...task }
    )
  );
}
export { addTheNote, deleteTheNote, toggleTheFinishedNote };
