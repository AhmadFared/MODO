import Task from "./Task";

const Tasks = ({
  tasks,
  onDelete,
  onToggle,
  onShowNotes,
  onShowAddNotes,
  onAddNote,
  notes,
  onDeleteNote,
  onToggleNote,
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onShowNotes={onShowNotes}
          onAddNote={onAddNote}
          onShowAddNotes={onShowAddNotes}
          notes={notes}
          onDeleteNote={onDeleteNote}
          onToggleNote={onToggleNote}
        />
      ))}
    </>
  );
};
export default Tasks;
