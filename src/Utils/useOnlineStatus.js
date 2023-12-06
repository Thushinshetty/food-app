import React from "react";
import { useEffect, useState } from "react";
export default function useOnlineStatus() {
  const [onlineStatus, SetOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", (e) => {
      console.log("offline");
      SetOnlineStatus(false);
    });

    window.addEventListener("online", (e) => {
      console.log("online");
      SetOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
}
