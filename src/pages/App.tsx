import { useState } from "react";
import Form from "../components/Form/index";
import List from "../components/List/index";
import Stopwatch from "../components/stopwatch/index";
import { Task } from "../types";

import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<Task[] | []>([]);

  function handleAddTask(task: Task) {
    setTasks([...tasks, task]);
  }
  return (
    <div className={style.AppStyle}>
      <Form handleAddTask={handleAddTask} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
