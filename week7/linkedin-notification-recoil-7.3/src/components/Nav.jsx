import React, { useEffect } from "react";
import {
  networkAtom,
  notificationAtom,
  jobsAtom,
  messagekAtom,
  totalNotificationCount,
} from "../store/atom";
import { useRecoilState, useRecoilValue } from "recoil";
function Nav() {
  const [networkCount, setNetworkCount] = useRecoilState(networkAtom);
  const [notificationCount, setNotificationCount] =
    useRecoilState(notificationAtom);
  const [jobsCount, setJobsCount] = useRecoilState(jobsAtom);
  const [messageCount, setMessageCount] = useRecoilState(messagekAtom);
  const totalNotification = useRecoilValue(totalNotificationCount);

  async function fetchData() {
    setInterval(async () => {
      const response = await fetch("http://localhost:8080/notifications");
      const data = await response.json();
      setNetworkCount(data.network);
      setNotificationCount(data.notifications);
      setJobsCount(data.jobs);
      setMessageCount(data.messaging);
    }, 10000);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
        justifyContent: "center",
      }}
    >
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
          {networkCount > 100 ? "100+" : networkCount}
        </sup>
      </button>
      <button>
        Notification
        <sup
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            padding: "1px",
          }}
        >
          {notificationCount > 100 ? "100+" : notificationCount}
        </sup>
      </button>
      <button>
        Jobs
        <sup
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            padding: "1px",
          }}
        >
          {jobsCount > 100 ? "100+" : jobsCount}
        </sup>
      </button>
      <button>
        Message
        <sup
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            padding: "1px",
          }}
        >
          {messageCount > 100 ? "100+" : messageCount}
        </sup>
      </button>
      <img
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740"
        alt=""
        style={{ height: "40px", borderRadius: "50%", width: "40px" }}
      />
      <sup>{totalNotification}</sup>
    </div>
  );
}

export default Nav;
