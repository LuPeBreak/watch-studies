import style from "./Watch.module.scss";
const Watch: React.FC = () => {
  return (
    <>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchSeparator}>:</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
    </>
  );
};

export default Watch;
