import React from "react";
import Item from "./Item/index";
import style from "./List.module.scss";

const List: React.FC = () => {
  const tasks = [
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "Javascript",
      time: "01:00:00",
    },
    {
      name: "Typescript",
      time: "01:30:00",
    },
  ];
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item {...task} key={index} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
