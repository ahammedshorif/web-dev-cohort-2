import { RecoilRoot } from "recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/count";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Wrapper />
      </div>
    </RecoilRoot>
  );
}

function Wrapper() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return <h1>count: {count}</h1>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count +</button>
      <button onClick={() => setCount(count - 1)}>count -</button>
    </div>
  );
}

export default App;