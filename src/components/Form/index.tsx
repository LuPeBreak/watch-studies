import React, { useState } from "react";
import Button from "../Button/index";
import style from "./Form.module.scss";
import { Task } from "../../types";
import { v4 as uuidV4 } from "uuid";

interface Props {
  handleAddTask: (task: Task) => void;
}

const Form: React.FC<Props> = ({ handleAddTask }: Props) => {
  const [task, setTask] = useState({
    name: "",
    time: "00:00",
    selected: false,
    completed: false,
    id: uuidV4(),
  });

  function addTask(event: React.FormEvent) {
    event.preventDefault();
    handleAddTask(task);
    setTask({
      name: "",
      time: "00:00",
      selected: false,
      completed: false,
      id: uuidV4(),
    });
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={task.name}
          onChange={(event) => {
            setTask({ ...task, name: event.target.value });
          }}
          placeholder="O que voce quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          onChange={(event) => {
            setTask({ ...task, time: event.target.value });
          }}
          value={task.time}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
};

export default Form;
