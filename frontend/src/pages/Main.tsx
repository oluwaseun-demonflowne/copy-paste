import { useEffect, useState } from "react";
import { useSession } from "../lib/auth-client";
import { useSocket } from "../providers/Socket";

const Main = () => {
  const { data } = useSession();
  const [text, setText] = useState("");
  const [socketText, useSocketText] = useState("");
  const { socket } = useSocket();

  useEffect(() => {
    socket?.emit("new_text", text, data!.user!.email!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    socket?.on("get_text", (texts: string) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useSocketText(texts);
    });
  }, [socket]);

  return (
    <div>
      <img
        src={data!.user!.image!}
        alt="user image"
        style={{ width: "70px", borderRadius: "50%" }}
      />
      <h3>{data?.user.email}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          readOnly
          value={socketText}
          style={{
            opacity: 0.4,
            outline: "none",
            height: "40px",
            fontSize: "16px",
            width: "290px"
          }}
        />
        <input
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
          style={{
            outline: "none",
            height: "40px",
            fontSize: "16px",
            width: "290px"
          }}
        />
      </div>
    </div>
  );
};

export default Main;
