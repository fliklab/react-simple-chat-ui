# React Chat UI (npm-react-chat-ui)

## 소개

`npm-react-chat-ui`는 React 및 TypeScript를 기반으로 구축된 채팅 UI 컴포넌트 라이브러리입니다. 클린 코드, 관심사 분리, 유지보수성, 성능 최적화를 중점으로 설계되었습니다.

이 라이브러리는 TypeScript로 작성되어 타입 안정성을 제공하며, 프로젝트에 쉽게 통합하여 풍부한 채팅 기능을 구현할 수 있도록 도와줍니다.

## 주요 기능

- **유연한 컴포넌트**: `ChatPage` 전체 페이지뿐만 아니라, `ChatWindow`, `ChatBubble` 등 개별 컴포넌트를 가져와 커스텀 UI를 구성할 수 있습니다.
- **메시지 정렬**: 사용자의 메시지는 오른쪽, 상대방의 메시지는 왼쪽에 자동으로 정렬됩니다.
- **프로필 이미지 및 기본 아바타**: 각 메시지에 프로필 이미지를 표시할 수 있으며, 이미지가 제공되지 않을 경우 기본 SVG 아바타가 표시됩니다.
- **닉네임 표시**: 각 메시지에 사용자 닉네임을 표시합니다.
- **다국어 지원**: `i18next` 및 `react-i18next`를 사용하여 다국어를 지원합니다. (설정 및 사용 방법은 추후 상세 가이드 예정)
- **성능 최적화**: `React.lazy`를 통한 Lazy Loading, `React.memo`를 사용한 Memoization, Webpack을 통한 Code Splitting 등 성능 최적화 기법이 적용되어 있습니다.
- **모바일 최적화**: 반응형 디자인을 통해 모바일 환경에서도 사용성을 제공합니다. (추가 개선 예정)
- **크로스 브라우징**: 주요 모던 브라우저에서 일관된 UI를 제공합니다.

## 설치

프로젝트에 `npm-react-chat-ui`를 추가하려면 다음 명령을 사용하세요:

```bash
pnpm add npm-react-chat-ui
```

또는 npm이나 yarn을 사용한다면:

```bash
npm install npm-react-chat-ui
yarn add npm-react-chat-ui
```

## 사용법

### 전체 채팅 페이지 사용

가장 간단하게 채팅 UI를 추가하는 방법은 `ChatPage` 컴포넌트를 사용하는 것입니다.

```tsx
import React from "react";
import { ChatPage } from "npm-react-chat-ui";
import "npm-react-chat-ui/dist/index.css"; // (TODO: CSS 파일 경로 및 사용법 확정 필요)

function App() {
  return <ChatPage />;
}

export default App;
```

**(주의)** 현재 CSS 파일은 별도로 제공되지 않거나, 컴포넌트 내부에 인라인 스타일로 정의되어 있습니다. 향후 CSS 추출 및 사용 방식이 확정되면 위 `import 'npm-react-chat-ui/dist/index.css';` 부분은 변경될 수 있습니다.

### 개별 컴포넌트 사용 (예시)

더 많은 제어가 필요하다면 개별 컴포넌트를 조합하여 사용할 수 있습니다.

```tsx
import React, { useState } from "react";
import { ChatWindow, Message } from "npm-react-chat-ui";
// import { ChatBubble, Avatar, Username, MessageText } from 'npm-react-chat-ui'; // 필요에 따라 더 세부적인 컴포넌트 사용

function MyCustomChat() {
  const [messages, setMessages] = useState<Message[]>([
    { username: "User1", message: "Hello!", align: "left" },
    { username: "You", message: "Hi there!", align: "right" },
  ]);

  // 메시지 전송 로직 등 추가 구현

  return (
    <div>
      {/* ChatWindow에 필요한 props 전달 */}
      <ChatWindow messages={messages} />
      {/* 입력 필드 및 전송 버튼 등 자체 구현 */}
    </div>
  );
}

export default MyCustomChat;
```

## 개발 환경

### 프로젝트 실행

개발 서버를 시작하려면 다음 명령을 실행하세요:

```bash
pnpm start
```

### 빌드

라이브러리를 프로덕션용으로 빌드하려면 다음 명령을 실행하세요. 빌드 결과물은 `dist` 폴더에 생성됩니다.

```bash
pnpm build
```

### 테스트

#### 단위 테스트 (Jest)

단위 테스트를 실행하려면 다음 명령을 사용하세요:

```bash
pnpm test
```

#### E2E 및 통합 테스트 (Cypress)

Cypress를 사용하여 E2E(End-to-End) 및 통합 테스트를 실행할 수 있습니다.

헤드리스 모드로 모든 테스트 실행:

```bash
pnpm test:e2e
```

Cypress 테스트 러너 UI 열기:

```bash
pnpm cy:open
```

개발 서버 (`pnpm start`)가 실행 중이어야 합니다.

## 컴포넌트 구조 (Atomic Design)

- **Atoms**: `Avatar`, `DefaultAvatar`, `Username`, `MessageText`
- **Molecules**: `ChatBubble`
- **Organisms**: `ChatWindow`
- **Templates**: `ChatPage`

## 파일 구조

```
npm-react-chat-ui/
├── dist/                      # 빌드 결과물 (JavaScript, 타입 정의)
├── public/                    # 개발 서버용 정적 파일 (index.html 등)
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Avatar.tsx
│   │   │   ├── Avatar.test.tsx
│   │   │   ├── DefaultAvatar.tsx
│   │   │   ├── MessageText.tsx
│   │   │   ├── MessageText.test.tsx
│   │   │   ├── Username.tsx
│   │   │   └── Username.test.tsx
│   │   ├── molecules/
│   │   │   ├── ChatBubble.tsx
│   │   │   └── ChatBubble.test.tsx
│   │   ├── organisms/
│   │   │   ├── ChatWindow.tsx
│   │   │   └── ChatWindow.test.tsx
│   │   └── templates/
│   │       ├── ChatPage.tsx
│   │       └── ChatPage.test.tsx
│   ├── tests/
│   │   └── integration/
│   │       └── chat_flow_spec.js  # Cypress 통합 테스트
│   ├── utils/
│   │   └── i18n.ts              # i18next 설정
│   ├── index.tsx                # 라이브러리 진입점
│   └── setupTests.js            # Jest 테스트 환경 설정
├── agenda/                    # 개발 계획 및 문서
├── cypress/                   # Cypress E2E 테스트 (초기 설정)
│   └── integration/
│       └── chat_page_spec.js
├── .gitignore
├── agenda.md
├── babel.config.js
├── cypress.config.js
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
└── webpack.config.js
```

## 기여하기

버그를 발견하거나 개선 사항이 있다면 언제든지 GitHub 이슈 트래커에 보고해주세요. 풀 리퀘스트도 환영합니다!

## 라이선스

ISC
