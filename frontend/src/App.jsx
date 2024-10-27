import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  timeout: 5000,
});

const formatTimestamp = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const messageListRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    };

    socket.on("load messages", (loadedMessages) => {
      setMessages(loadedMessages);
      scrollToBottom();
    });

    socket.on("chat message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      scrollToBottom();
    });

    if (!username) {
      const name = prompt("Enter your username:");
      setUsername(name);
      localStorage.setItem("username", name);
      socket.emit("username", name);
    } else {
      socket.emit("username", username);
    }

    return () => {
      socket.off("load messages");
      socket.off("chat message");
    };
  }, [username]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      author: username,
      content: message.trim(),
      timestamp: new Date().toISOString(),
    };

    socket.emit("chat message", newMessage);
    setMessage("");
  };

  return (
    <div className="h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="h-20 bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto h-full flex items-center px-4">
          <h1 className="text-xl font-bold text-gray-800">NAVBAR</h1>
        </div>
      </nav>

      {/* Chat Container */}
      <div className="max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-md">
        {/* Chat Header */}
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-center text-gray-800">
            MedManage Consultation {username ? `(${username})` : ""}
          </h2>
        </div>

        {/* Messages Container */}
        <div
          ref={messageListRef}
          className="h-[calc(100vh-280px)] overflow-y-auto p-4 space-y-4"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                msg.author === username ? "items-end" : "items-start"
              }`}
            >
              <span className="text-sm text-gray-600 mb-1">
                {msg.author}
              </span>
              <div className="max-w-[70%]">
                <div
                  className={`rounded-2xl px-4 py-2 ${
                    msg.author === username
                      ? "bg-blue-500 text-white rounded-tr-none"
                      : "bg-gray-200 text-gray-800 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {formatTimestamp(msg.timestamp || msg.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
