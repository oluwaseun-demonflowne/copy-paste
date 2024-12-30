"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { type Socket, io } from "socket.io-client";
import { useSession } from "../lib/auth-client";

type SocketContextType = {
  socket: Socket | null;
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  // const { senderEmail } = useEmailState();
  const [socket, setSocket] = useState<Socket | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;
    // const socket: Socket = io("https://workers-chatapp-backend.onrender.com");
    // console.log("hiii");
    const socket: Socket = io(
      process.env.NODE_ENV === "production"
        ? "https://copy-paste-8sxg.onrender.com"
        : "http://localhost:5001"
    );

    socket.emit("new-online", session?.user?.email);

    // console.log(socket);


    // if (!session!.user!.email) {


    // socket.on("disconnect", () => {
      
    // });

    setSocket(socket);

    // return () => {

    // };
    return () => {
      socket?.disconnect();
    };
  }, [session]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
