import {countAtom} from '../store/atom/count';
import {useRecoilState,useRecoilValue} from "recoil"



function CountRender() {
  const count=useRecoilValue(countAtom)
    return (
      <div>
        <h1>count : {count}</h1>
      </div>
    );
  }

export default CountRender