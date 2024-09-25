import { useState } from 'react';
import * as classes from './index.module.scss';

const App = () => {
  const [counter, setCounter] = useState<number>(1);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className={classes.btn}>
      <h1>Counter</h1>
      <button onClick={decrement}>-1</button>
      <input type='text' value={counter} />
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default App;
