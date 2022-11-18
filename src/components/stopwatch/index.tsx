import Button from "../Button/index";
import Watch from "./Watch/index";

import style from "./Stopwatch.module.scss";

const Stopwatch: React.FC = () => {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button>Começar!</Button>
    </div>
  );
};

export default Stopwatch;
