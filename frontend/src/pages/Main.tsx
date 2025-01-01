import { useEffect, useRef, useState } from "react";
import { useSession } from "../lib/auth-client";
import { useSocket } from "../providers/Socket";
import { BiClipboard } from "react-icons/bi";
import { handleCopy } from "../utils/handleCopt";

const Main = () => {
  const { data } = useSession();
  const [text, setText] = useState("");
  const [socketText, useSocketText] = useState("");
  const [socketIdServer, setSocketId] = useState("");
  const { socket } = useSocket();
  const buttonRef = useRef<HTMLButtonElement>(null);
  // console.log("Service Worker supported:", "serviceWorker" in navigator);

  useEffect(() => {
    socket?.emit("new_text", text, data!.user!.email!, socket.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    socket?.on("get_text", (texts: string, socketIdServer: string) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useSocketText(texts);
      setSocketId(socketIdServer);
      console.log(socket.id, socketIdServer);
      if (socket.id === socketIdServer) return;
      setTimeout(() => {
        if (navigator.serviceWorker.controller) {
          buttonRef.current?.click();
          navigator.serviceWorker.controller.postMessage({
            action: "copyToClipboard",
            text: texts
          });
        }
      }, 2000);

      //   // buttonRef.current?.click();
      //   if (navigator.serviceWorker.controller) {
      //     navigator.serviceWorker.controller.postMessage({
      //       action: "copyToClipboard",
      //       text: texts
      //     });
      //   }
      // }, 2000);
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
        {socketIdServer?.length > 4 && socketIdServer !== socket?.id && (
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

            <button
              ref={buttonRef}
              onClick={() => handleCopy(socketText)}
              style={{
                fontSize: "20px",
                background: "transparent",
                position: "absolute",
                top: 1,
                right: -10,
                outline: "none",
                border: 0
              }}>
              <BiClipboard />
            </button>
          </div>
        )}
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
