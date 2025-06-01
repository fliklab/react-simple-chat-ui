import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Avatar from "./components/atoms/Avatar";
import Username from "./components/atoms/Username";
import MessageText from "./components/atoms/MessageText";
import ChatBubble from "./components/molecules/ChatBubble";
import ChatWindow from "./components/organisms/ChatWindow";
import "./utils/i18n"; // i18n 초기화

const LazyChatPage = React.lazy(
  () => import("./components/templates/ChatPage")
);

const App: React.FC = () => {
  const messages = [
    {
      avatarSrc: "https://via.placeholder.com/40",
      username: "John Doe",
      message: "Hello, this is a test message!",
    },
    {
      avatarSrc: "https://via.placeholder.com/40",
      username: "Jane Smith",
      message: "Hi John, nice to meet you!",
    },
  ];

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyChatPage />
      </Suspense>
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
