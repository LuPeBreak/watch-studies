import React, { useState } from "react";
import { Task } from "../../types";
import Item from "./Item/index";
import style from "./List.module.scss";

interface Props {
  tasks: Task[];
  handleSelectTask: (selectedTask: Task) => void;
}

const List: React.FC<Props> = ({ tasks, handleSelectTask }: Props) => {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item handleSelectTask={handleSelectTask} task={task} key={task.id} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
