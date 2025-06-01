// src/index.tsx

// Atoms
export { default as Avatar } from "./components/atoms/Avatar";
export { default as DefaultAvatar } from "./components/atoms/DefaultAvatar";
export { default as Username } from "./components/atoms/Username";
export { default as MessageText } from "./components/atoms/MessageText";

// Molecules
export { default as ChatBubble } from "./components/molecules/ChatBubble";

// Organisms
export { default as ChatWindow } from "./components/organisms/ChatWindow";
export type { Message } from "./components/organisms/ChatWindow"; // Message 타입도 export

// Templates
export { default as ChatPage } from "./components/templates/ChatPage";

// i18n 초기화는 라이브러리 사용자가 자신의 애플리케이션 레벨에서 수행하도록 유도하는 것이 일반적입니다.
// 만약 라이브러리가 i18n 인스턴스를 직접 설정하고 export 해야 한다면 유지할 수 있지만,
// 여기서는 사용자가 react-i18next를 이미 사용하고 있다고 가정하고, 라이브러리 내부의 i18n 초기화 구문은 제거합니다.
// import "./utils/i18n"; // 제거 또는 주석 처리
