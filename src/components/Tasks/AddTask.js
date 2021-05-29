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
    <form className="add-form add-task" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Add Date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <input type="submit" value="save Task" className="button button-block" />
    </form>
  );
};

export default AddTask;
