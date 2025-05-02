import Wrapper from "./components/Wrapper";
import {RecoilRoot} from "recoil"

function App() {
  return (
    <div>
      <RecoilRoot>
        <Wrapper></Wrapper>
      </RecoilRoot>
    </div>
  );
}

export default App;
