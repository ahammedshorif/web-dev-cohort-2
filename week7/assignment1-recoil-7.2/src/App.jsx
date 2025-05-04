import { RecoilRoot } from "recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/count";

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
  const even = useRecoilValue(evenSelector)
  return <div>
    <h1>count: {count}</h1>;
    <h3>{even==0 ? "even count" : "odd count"}</h3>
  </div>
  


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