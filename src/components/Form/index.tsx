import React from "react";
import Button from "../Button/index";


const Form: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que voce quer estudar"
          required
        />
      </div>
      <div>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button />
    </form>
  );
};

export default Form;