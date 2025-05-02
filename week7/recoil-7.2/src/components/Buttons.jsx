import React from "react";
import { countAtom } from "../store/atom/count";
import { useRecoilState } from "recoil";

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        count -
      </button>
    </div>
  );
}

export default Buttons;
