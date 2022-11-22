import { Task } from "../../../types/index.js";
import style from "../List.module.scss";

interface Props {
  task: Task;
  handleSelectTask: (selectedTask: Task) => void;
}

const Item: React.FC<Props> = ({ task, handleSelectTask }: Props) => {
  return (
    <li
      className={`${style.item} ${task.selected ? style.selectedItem : ""}`}
      onClick={() => handleSelectTask(task)}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
    </li>
  );
};

export default Item;
