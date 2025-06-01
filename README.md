# React Chat UI Library

## 소개

이 라이브러리는 React를 기반으로 한 채팅 UI 컴포넌트 라이브러리입니다. 클린 코드, 관심사 분리, 유지보수성, 성능 최적화를 중점으로 설계되었습니다.

## 주요 기능

- **메시지 정렬**: 사용자의 메시지는 오른쪽, 상대방의 메시지는 왼쪽에 정렬됩니다.
- **프로필 이미지 및 닉네임 표시**: 각 메시지에 프로필 이미지와 닉네임이 표시됩니다.
- **다국어 지원**: i18n 라이브러리를 사용하여 다국어를 지원합니다.
- **모바일 최적화**: 반응형 디자인을 통해 모바일 환경에서도 최적화되어 있습니다.
- **크로스 브라우징**: 다양한 브라우저에서 동일한 UI를 제공합니다.

## 설치

```bash
npm install react-chat-ui-library
```

## 사용법

```jsx
import { ChatPage } from "react-chat-ui-library";

function App() {
  return <ChatPage />;
}
```

## 컴포넌트 구조

- **Atoms**: Avatar, Username, MessageText
- **Molecules**: ChatBubble
- **Organisms**: ChatWindow
- **Templates**: ChatPage

## 성능 최적화

- Lazy Loading, Memoization, Code Splitting을 통해 성능을 최적화합니다.

## 테스트

- Jest와 React Testing Library를 사용하여 단위 테스트를 작성합니다.
- Cypress를 사용하여 통합 테스트를 수행합니다.

## 파일 구조

```
/src
  /components
    /atoms
      Avatar.js
      Username.js
      MessageText.js
    /molecules
      ChatBubble.js
    /organisms
      ChatWindow.js
    /templates
      ChatPage.js
  /hooks
    useChat.js
  /contexts
    ChatContext.js
  /utils
    i18n.js
  /tests
    /unit
    /integration
```

## 기타 고려 사항

- 모듈 호환성, 보안, 접근성을 고려하여 설계되었습니다.
