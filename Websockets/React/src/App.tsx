import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messageList, setMessageList] = useState<String[]>([]);
  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = () => {
      console.log("connection established");
      newSocket.send("We are connected");
      setSocket(newSocket);
    };
    newSocket.onmessage = (e) => {
      setMessageList((f) => [...f, e.data]);
      console.log(e);
    };
    return () => {
      socket?.close();
      setSocket(null);
    };
  }, []);
  console.log(socket);

  return (
    <>
      {messageList.map((val) => (
        <div>{val}</div>
      ))}
      <div>{socket ? <div>connected</div> : <div>not connected</div>}</div>;
    </>
  );
}

export default App;
