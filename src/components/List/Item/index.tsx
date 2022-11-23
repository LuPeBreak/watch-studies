import { Task } from "../../../types/index.js";
import style from "./Item.module.scss";

interface Props {
  task: Task;
  handleSelectTask: (selectedTask: Task) => void;
}

const Item: React.FC<Props> = ({ task, handleSelectTask }: Props) => {
  return (
    <li
      className={`${style.item} ${task.selected ? style.selectedItem : ""} ${task.completed ? style.completedItem : ""}`}
      onClick={() => {
        if(!task.completed){
          handleSelectTask(task)
        }
      }}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
      {task.completed && <span className={style.completed} aria-label="tarefa completada"></span>}
    </li>
  );
};

export default Item;
