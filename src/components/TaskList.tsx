import React from "react";
import Tasks from "./Tasks";

interface eTask {
  eid: number;
  etext: string;
  ecomplete: boolean;
}

interface TaskListProps {
  etasks: eTask[];
  edeleteTask: (eid: number) => void;
  estartEditTask: (eid: number, etext: string) => void;
  etoggleComplete: (eid: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  etasks,
  edeleteTask,
  estartEditTask,
  etoggleComplete,
}) => {
  return (
    <ul className="list-group mt-4" data-bs-theme="dark">
      {etasks.map((task) => (
        <Tasks
          key={task.eid}
          task={task}
          edeleteTask={edeleteTask}
          estartEditTask={estartEditTask}
          etoggleComplete={etoggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;