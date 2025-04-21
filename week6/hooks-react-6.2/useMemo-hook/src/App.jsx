import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const sum = useMemo(() => {
    let counter = 0;
    for (let i = 1; i < inputValue; i++) {
      counter += i;
    }
    return counter;
  }, [inputValue]);

  return (
    <div>
        <input
          type="number"
          name=""
          id="input"
          onChange={function(e) {
            setInputValue(e.target.value);
          }}
        />
        <h3>sum is {sum}</h3>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count {count}
        </button>
      </div>
  );
}

export default App;
