// Fetch Tasks
const fetchTasks = async () => {
  const result = await fetch("http://localhost:4000/tasks");
  const data = await result.json();

  return data;
};

// Fetch Task
const fetchTask = async (id) => {
  const result = await fetch(`http://localhost:4000/tasks/${id}`);
  const data = await result.json();

  return data;
};

// Delete Task
async function deleteTheTask(id, values, setValues) {
  await fetch(`http://localhost:4000/tasks/${id}`, {
    method: "DELETE",
  });

  setValues(values.filter((task) => task.id !== id));
}

// Toggle Finished
async function toggleTheFinished(id, values, setValues) {
  const taskToToggle = await fetchTask(id);
  const updTask = { ...taskToToggle, finished: !taskToToggle.finished };

  const result = await fetch(`http://localhost:4000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updTask),
  });

  const data = await result.json();

  setValues(
    values.map((task) =>
      task.id === id ? { ...task, finished: data.finished } : task
    )
  );
}

// Show Add Notes
async function showTheAddNote(id, values, setValues) {
  setValues(
    values.map((task) =>
      task.id === id ? { ...task, showAddNotes: !task.showAddNotes } : task
    )
  );
}

// Toggle Note
async function toggleTheNote(id, values, setValues) {
  setValues(
    values.map((task) =>
      task.id === id ? { ...task, showNotes: !task.showNotes } : task
    )
  );
}

// Add a Task
async function addTheTask(task, values, setValues) {
  const result = await fetch("http://localhost:4000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const data = await result.json();
  setValues([...values, data]);
}

export {
  fetchTasks,
  deleteTheTask,
  toggleTheFinished,
  showTheAddNote,
  toggleTheNote,
  addTheTask,
};
