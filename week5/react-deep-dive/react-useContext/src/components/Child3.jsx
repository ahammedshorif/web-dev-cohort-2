import React, { useContext } from "react";
import { userContext } from "../App";

function Child3() {
  const user = useContext(userContext);
  return (
    <div>
      <h2>Child3</h2> <br />
      <br />
      {user.name}
      {console.log("child 3")}
    </div>
  );
}

export default Child3;
