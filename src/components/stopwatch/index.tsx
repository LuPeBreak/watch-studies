import Button from "../Button/index";
import Watch from "./Watch/index";

import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { Task } from "../../types/index";
import { useEffect, useState } from "react";

interface Props {
  selected: Task | undefined;
}

const Stopwatch: React.FC<Props> = ({ selected }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

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
