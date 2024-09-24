
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


interface eTask {
  eid: number;
  etext: string;
  ecomplete: boolean;
}

const storagekey = "bananaTasks";

const App = () => {
  const [etasks, esetTasks] = useState<eTask[]>(() => {
    const storedTask = localStorage.getItem(storagekey);
    return storedTask ? JSON.parse(storedTask) : [];
  });

  const [einput, esetInput] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem(storagekey);
    if (storedTasks) {
      esetTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem(storagekey, JSON.stringify(etasks));
  }, [etasks]);

  // Function to add or update a task
  const eaddTask = () => {
    if (einput === "") return;

    if (editingId !== null) {
      const updatedTasks = etasks.map((task) =>
        task.eid === editingId ? { ...task, etext: einput } : task
      );
      esetTasks(updatedTasks);
      setEditingId(null);
      esetInput("");
    } else {
      const newTask: eTask = {
        eid: Date.now(),
        etext: einput,
        ecomplete: false,
      };
      esetTasks([...etasks, newTask]);
      esetInput("");
    }
  };

  // Function to start editing a task
  const estartEditTask = (eid: number, etext: string) => {
    setEditingId(eid);
    esetInput(etext);
  };

  // Function to cancel editing
  const ecancelEdit = () => {
    setEditingId(null);
    esetInput("");
  };

  // Function to delete a task
  const edeleteTask = (eid: number) => {
    esetTasks(etasks.filter((etask) => etask.eid !== eid));
  };

  // Function to toggle task completion status
  const etoggleComplete = (eid: number) => {
    const updatedTasks = etasks.map((task) =>
      task.eid === eid ? { ...task, ecomplete: !task.ecomplete } : task
    );
    esetTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>My Tasks</h1>
      <TaskForm
        einput={einput}
        esetInput={esetInput}
        editingId={editingId}
        eaddTask={eaddTask}
        ecancelEdit={ecancelEdit}
      />
      <TaskList
        etasks={etasks}
        edeleteTask={edeleteTask}
        estartEditTask={estartEditTask}
        etoggleComplete={etoggleComplete}
      />
    </div>
  );
};

export default App;