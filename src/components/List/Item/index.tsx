import style from "../List.module.scss";

interface Props {
  name: string;
  time: string;
}

const Item: React.FC<Props> = (props: Props) => {
  return (
    <li className={style.item}>
      <h3>{props.name}</h3>
      <span>{props.time}</span>
    </li>
  );
};

export default Item;
