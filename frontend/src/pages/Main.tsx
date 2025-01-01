import { useEffect, useState } from "react";
import { useSession } from "../lib/auth-client";
import { useSocket } from "../providers/Socket";

const Main = () => {
  const { data } = useSession();
  const [text, setText] = useState("");
  const { socket } = useSocket();

  useEffect(() => {
    console.log("hi");
    socket?.emit("new_text", text, data!.user!.email!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
  return (
    <div>
      <img
        src={data!.user!.image!}
        alt="user image"
        style={{ width: "70px", borderRadius: "50%" }}
      />
      <h3>{data?.user.email}</h3>
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
  );
};

export default Main;
