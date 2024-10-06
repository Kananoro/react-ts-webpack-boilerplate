import { useState } from 'react';
import 'app/styles/index.scss';

const App = () => {
  const [counter, setCounter] = useState<number>(1);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className='app'>
      <div className='counter'>
        <h1 className='counter__name'>Counter</h1>
        <div className='counter-control'>
          <button
            className='counter-control__button counter-control__button__increment'
            onClick={decrement}
          >
            -1
          </button>
          <label className='counter-control__text'>{counter}</label>
          <button
            className='counter-control__button counter-control__button__decrement'
            onClick={increment}
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
