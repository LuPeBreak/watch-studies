import { Task } from "../../../types/index.js";
import style from "../List.module.scss";

const Item: React.FC<Task> = (task: Task) => {
  return (
    <li className={style.item}>
      <h3>{task.name}</h3>
      <span>{task.time}</span>
    </li>
  );
};

export default Item;
