import React from "react";
import {
  networkAtom,
  notificationAtom,
  jobsAtom,
  messagekAtom,
} from "../store/atom";
import { useRecoilState, useRecoilValue } from "recoil";
function Nav() {
  const networkCount = useRecoilValue(networkAtom);
  const [notificationCount, setNotificationCount] =
    useRecoilState(notificationAtom);
  const [jobsCount, setJobsCount] = useRecoilState(jobsAtom);
  const [messageCount, setMessageCount] = useRecoilState(messagekAtom);
  return (
    <div style={{ display: "flex", gap: "10px" , width:"100%", justifyContent:"center"}}>
      <button>Home</button>
      <button>
        My networks
        <sup
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            padding: "1px",
          }}
        >
          {networkCount> 100 ? "100+" : networkCount}
        </sup>
      </button>
      <button  onClick={()=>{
            setNotificationCount(notificationCount + 1)
          }}>
        Notification
        <sup
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            padding: "1px",
          }}
        >
          {notificationCount>100 ? "100+" : notificationCount}
        </sup>
      </button>
      <button  onClick={()=>{
            setJobsCount(jobsCount + 1)
          }}>
        Jobs
        <sup
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            padding: "1px",
          }}
        >
          {jobsCount>100 ? "100+" : jobsCount}
        </sup>
      </button>
      <button  onClick={()=>{
            setMessageCount(messageCount + 1)
          }}>
        Message
        <sup
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            padding: "1px",
          }}
        >
          {messageCount>100 ? "100+" : messageCount}
        </sup>
      </button>
    </div>
  );
}

export default Nav;
