import React from "react";

interface eTask {
  eid: number;
  etext: string;
  ecomplete: boolean;
}

interface TasksProps {
  task: eTask;
  edeleteTask: (eid: number) => void;
  estartEditTask: (eid: number, etext: string) => void;
  etoggleComplete: (eid: number) => void;
}

const Tasks: React.FC<TasksProps> = ({
  task,
  edeleteTask,
  estartEditTask,
  etoggleComplete,
}) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        task.ecomplete ? "completed" : ""
      }`}
    >
      <div>
        <input
          type="checkbox"
          checked={task.ecomplete}
          onChange={() => etoggleComplete(task.eid)}
          className="form-check-input me-2"
        />
        <span
          style={{
            textDecoration: task.ecomplete ? "line-through" : "none",
            color: task.ecomplete ? "gray" : "black",
          }}
        >
          {task.etext}
        </span>
      </div>
      <div>
        <button
          className="btn btn-info mx-2"
          onClick={() => estartEditTask(task.eid, task.etext)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger mx-3"
          onClick={() => edeleteTask(task.eid)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Tasks;