import React from "react";

interface TaskFormProps {
  einput: string;
  esetInput: (value: string) => void;
  editingId: number | null;
  eaddTask: () => void;
  ecancelEdit: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  einput,
  esetInput,
  editingId,
  eaddTask,
  ecancelEdit,
}) => {
  return (
    <div className="row">
      <div className="col">
        <input
          type="text"
          className="form-control"
          value={einput}
          onChange={(e) => esetInput(e.target.value)}
          placeholder="Add a banana task"
        />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={eaddTask}>
          {editingId !== null ? "Update Task" : "Add Task"}
        </button>
      </div>
      {editingId !== null && (
        <div className="col">
          <button className="btn btn-secondary" onClick={ecancelEdit}>
            Cancel Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskForm;