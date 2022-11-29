import React from "react";
import style from "./CongratulationsMessage.module.scss";

interface Props {
  handleSetCompleted: (completed: boolean) => void;
}

const CongratulationsMessage: React.FC<Props> = ({
  handleSetCompleted,
}: Props) => {
  return (
    <div className={style.content}>
      <div className={style.modal}>
        <iframe
          title="gif"
          src="https://giphy.com/embed/BPJmthQ3YRwD6QqcVD"
          width="480"
          height="270"
          allowFullScreen
        ></iframe>

        <h1 className={style.title}>Parabens!!!</h1>
        <button
          onClick={() => handleSetCompleted(false)}
          className={style.button}
        >
          fechar
        </button>
      </div>
    </div>
  );
};

export default CongratulationsMessage;
