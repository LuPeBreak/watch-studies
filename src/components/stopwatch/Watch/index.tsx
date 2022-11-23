import style from "./Watch.module.scss";

interface Props {
  time: number | undefined;
}

const Watch: React.FC<Props> = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [setOfTenMinutes, minutesUnits] = String(minutes).padStart(2, "0");
  const [setOfTenSeconds, secondsUnits] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.watchNumber}>{setOfTenMinutes}</span>
      <span className={style.watchNumber}>{minutesUnits}</span>
      <span className={style.watchSeparator}>:</span>
      <span className={style.watchNumber}>{setOfTenSeconds}</span>
      <span className={style.watchNumber}>{secondsUnits}</span>
    </>
  );
};

export default Watch;
