import Button from "../Button/index";
import Watch from "./Watch/index";

import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { Task } from "../../types/index";
import { useEffect, useState } from "react";

interface Props {
  selected: Task | undefined;
  handleEndTask: () => void;
}

const Stopwatch: React.FC<Props> = ({ selected, handleEndTask }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressiveTimeCount(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressiveTimeCount(counter - 1);
      }
      handleEndTask()
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => regressiveTimeCount(time)}>Começar!</Button>
    </div>
  );
};

export default Stopwatch;
