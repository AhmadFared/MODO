import React, { useState } from "react";
import "./task.css";
import "../btn.css";
import "../form.css";
const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [finished, setFinished] = useState(false);
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [showAddNotes, setShowAddNotes] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("please add a task");
      return;
    }

    onAdd({ title, date, finished, notes, showNotes, showAddNotes });

    setTitle("");
    setDate("");
    setFinished(false);
    setNotes([]);
    setShowNotes(false);
    setShowAddNotes(false);
  };

  return (
    <form className="add-form add-task col" onSubmit={onSubmit}>
      <div className="form-control row">
        <label className="add-form-header">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-control row">
        <label className="add-form-header">Date</label>
        <input
          type="text"
          placeholder="Add Date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="save Task"
        className="button button-block row"
      />
    </form>
  );
};

export default AddTask;
