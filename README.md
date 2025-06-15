# React Chat UI (react-simple-chat-ui)

`react-simple-chat-ui`는 React 및 TypeScript를 기반으로 구축된 채팅 UI 컴포넌트 라이브러리입니다.

## 주요 기능

- **컴포넌트**: `ChatPage` 전체 페이지뿐만 아니라, `ChatWindow`, `ChatBubble` 등 개별 컴포넌트를 가져와 커스텀 UI를 구성할 수 있습니다.
- **메시지 정렬**: 사용자의 메시지는 오른쪽, 상대방의 메시지는 왼쪽에 자동으로 정렬됩니다.
- **프로필 이미지 및 기본 아바타**: 각 메시지에 프로필 이미지를 표시할 수 있으며, 이미지가 제공되지 않을 경우 기본 SVG 아바타가 표시됩니다.
- **닉네임 표시**: 각 메시지에 사용자 닉네임을 표시합니다.
- **다국어 지원 (i18n)**: `react-i18next`를 통해 다국어를 지원하며, 사용하는 애플리케이션의 `i18n` 설정을 따릅니다. 자세한 내용은 아래 "다국어 (Internationalization - i18n)" 섹션을 참고하세요.
- **성능 최적화**: `React.lazy`를 통한 Lazy Loading, `React.memo`를 사용한 Memoization, Webpack을 통한 Code Splitting 등 성능 최적화 기법이 적용되어 있습니다.
- **모바일 최적화**: 반응형 디자인을 통해 모바일 환경에서도 사용성을 제공합니다. (추가 개선 예정)
- **크로스 브라우징**: 주요 모던 브라우저에서 일관된 UI를 제공합니다.

## 설치

다음 명령을 사용하여 프로젝트에 추가할 수 있습니다.

```bash
npm add react-simple-chat-ui
```

## 사용법

### 전체 채팅 페이지 사용

가장 간단하게 채팅 UI를 구현하려면 `ChatPage` 컴포넌트를 사용합니다.

```tsx
import React from "react";
import { ChatPage } from "react-simple-chat-ui";

function App() {
  return <ChatPage />;
}

export default App;
```

**(참고)** 컴포넌트들은 대부분 인라인 스타일을 통해 기본적인 스타일링을 제공합니다.
필요에 따라 스타일을 커스터마이징하려면, 각 컴포넌트에 `style` prop을 전달하거나 CSS-in-JS 라이브러리, 또는 전역 CSS를 사용하여 덮어쓸 수 있습니다.

### 개별 컴포넌트 사용 (예시)

다음과 같이 개별 컴포넌트를 활용하여 좀더 자유롭게 조합하여 활용할 수 있습니다.

```tsx
import React, { useState } from "react";
import { ChatWindow, Message } from "react-simple-chat-ui";
// import { ChatBubble, Avatar, Username, MessageText, DefaultAvatar } from 'react-simple-chat-ui'; // 필요에 따라 더 세부적인 컴포넌트 사용

function MyCustomChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      username: "User1",
      message: "Hello!",
      align: "left",
      avatarSrc: "url_to_avatar_or_empty",
    },
    { username: "You", message: "Hi there!", align: "right" }, // avatarSrc가 없으면 DefaultAvatar 사용
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

## 다국어 (Internationalization - i18n)

이 라이브러리의 컴포넌트들(예: `ChatPage`)은 `react-i18next`를 사용하여 텍스트를 표시합니다.
따라서, 라이브러리를 사용하는 애플리케이션에서 `i18next` 및 `react-i18next` 설정을 완료해야 합니다.
라이브러리 컴포넌트는 해당 애플리케이션의 `I18nextProvider`로부터 `i18n` 인스턴스를 자동으로 사용합니다.

### 필요한 번역 Key

애플리케이션의 i18n 리소스 파일에 다음 Key에 대한 번역을 추가해야 합니다:

- `Send`: 메시지 전송 버튼의 텍스트 (예: "Send", "보내기")
  _(추후 다른 컴포넌트에서 추가 Key가 사용될 수 있습니다.)_

### i18next 설정 예시

다음은 React 애플리케이션에서 `i18next`를 설정하는 기본적인 예시입니다.
(이 설정은 프로젝트의 진입점, 예를 들어 `main.tsx` 또는 `index.tsx` 파일에 위치할 수 있습니다.)

```typescript
// src/i18n.ts (또는 애플리케이션의 i18n 설정 파일)
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Send: "Send",
      // 여기에 애플리케이션의 다른 번역들도 추가
    },
  },
  ko: {
    translation: {
      Send: "보내기",
      // 여기에 애플리케이션의 다른 번역들도 추가
    },
  },
  // 다른 언어 리소스 추가
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // 기본 언어 설정
    fallbackLng: "en", // lng에 해당하는 번역이 없을 경우 사용될 언어
    interpolation: {
      escapeValue: false, // React는 이미 XSS 방지 기능을 제공
    },
  });

export default i18n;
```

위와 같이 설정한 후, 애플리케이션의 최상위 컴포넌트를 `I18nextProvider`로 감싸주어야 합니다.
그러나 `ChatPage`와 같은 이 라이브러리의 컴포넌트는 이미 `useTranslation` 훅을 사용하므로,
애플리케이션 레벨에서 `I18nextProvider`가 올바르게 설정되어 있다면 별도의 추가 작업 없이 번역이 적용됩니다.

**참고**: `src/utils/i18n.ts` 파일은 위 설정의 예시를 포함하고 있으며, 라이브러리 자체에서 직접 사용되지는 않습니다.

----

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
react-simple-chat-ui/
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

버그를 발견하거나 개선 사항이 있다면 언제든지 GitHub Issue를 통해 보고해주세요.

## 라이선스

ISC
