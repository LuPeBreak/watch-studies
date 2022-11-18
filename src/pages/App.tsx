import Form from "../components/Form/index";
import List from "../components/List/index";
import Stopwatch from "../components/stopwatch/index";

import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
