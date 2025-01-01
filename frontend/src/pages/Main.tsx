import { useEffect, useState } from "react";
import { useSession } from "../lib/auth-client";
import { useSocket } from "../providers/Socket";
import { BiClipboard } from "react-icons/bi";
import { handleCopy } from "../utils/handleCopt";

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
        <div style={{ position: "relative" }}>
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
          <BiClipboard
            onClick={() => handleCopy(socketText)}
            style={{
              fontSize: "20px",
              position: "absolute",
              top: 13,
              right: 7
            }}
          />
        </div>
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
