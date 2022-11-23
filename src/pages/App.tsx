import { useState } from "react";
import Form from "../components/Form/index";
import List from "../components/List/index";
import Stopwatch from "../components/stopwatch/index";
import { Task } from "../types";

import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<Task[] | []>([]);

  const [selected, setSelected] = useState<Task>();
  function handleSelectTask(selectedTask: Task) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function handleAddTask(task: Task) {
    setTasks([...tasks, task]);
  }
  return (
    <div className={style.AppStyle}>
      <Form handleAddTask={handleAddTask} />
      <List tasks={tasks} handleSelectTask={handleSelectTask} />
      <Stopwatch selected={selected} />
    </div>
  );
}

export default App;
