import { useState } from "react";
import { CountContext } from "./context";
import Wrapper from "./components/Wrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    
      <CountContext.Provider value={{ count, setCount }}>
        <Wrapper></Wrapper>
      </CountContext.Provider>
    </div>
  );
}







export default App;
