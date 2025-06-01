# 개발 계획

## 1. 초기 설계

- Atomic Design 원칙에 따른 컴포넌트 설계
- 기능 요구 사항 정의
- 성능 최적화 전략 수립
- 테스트 계획 수립

## 2. 환경 설정

- 프로젝트 초기화 및 기본 설정
- 필요한 라이브러리 설치 및 설정

## 3. 컴포넌트 개발

- Atoms 개발: Avatar, Username, MessageText
- Molecules 개발: ChatBubble
- Organisms 개발: ChatWindow
- Templates 개발: ChatPage

## 4. 기능 구현

- 메시지 정렬 기능 구현
- 프로필 이미지 및 닉네임 표시 기능 구현
- 다국어 지원 기능 구현

## 5. 성능 최적화

- Lazy Loading 구현
- Memoization 적용
- Code Splitting 적용

## 6. 테스트

- 단위 테스트 작성 및 실행
- 통합 테스트 작성 및 실행

## 7. 문서화

- README.md 작성 및 업데이트
- 사용자 가이드 작성

## 8. 배포

- npm 패키지로 배포
- 버전 관리 및 업데이트 계획 수립

## PR 단위 개발 계획

### PR 1: Atoms 컴포넌트 개발 (완료)

- **개발 내용**: Avatar, Username, MessageText 컴포넌트 개발 (TypeScript로 재작성)
- **완료 기준**: 각 컴포넌트가 개별적으로 렌더링되고 스타일이 적용되어야 함. TypeScript로 타입 정의 완료.

### PR 2: Molecules 컴포넌트 개발 (완료)

- **개발 내용**: ChatBubble 컴포넌트 개발 (TypeScript로 재작성)
- **완료 기준**: ChatBubble이 Atoms를 포함하여 올바르게 렌더링되어야 함. TypeScript로 타입 정의 완료.

### PR 3: Organisms 컴포넌트 개발 (완료)

- **개발 내용**: ChatWindow 컴포넌트 개발 (TypeScript로 작성 완료)
- **완료 기준**: 여러 개의 ChatBubble이 포함된 채팅 창이 올바르게 렌더링되어야 함. TypeScript로 타입 정의 완료.

### PR 4: npm 패키지 배포 셋업 (완료)

- **개발 내용**: npm 패키지 배포 환경 설정 및 초기 배포 테스트 완료
- **완료 기준**: 패키지가 npm에 성공적으로 배포되고 설치 가능한 상태여야 함. 배포 준비 완료.

### PR 5: Templates 컴포넌트 개발 (완료)

- **개발 내용**: ChatPage 컴포넌트 개발 (TypeScript로 작성 완료)
- **완료 기준**: ChatWindow와 입력창이 포함된 전체 채팅 페이지가 렌더링되어야 함. TypeScript로 타입 정의 완료.

### PR 6: 기능 구현 (완료)

- **개발 내용**: 메시지 정렬, 프로필 이미지 및 닉네임 표시, 다국어 지원 기능 구현 완료
- **완료 기준**: 각 기능이 요구 사항에 맞게 동작해야 함. 모든 기능이 적절하게 구현됨.

### PR 7: 성능 최적화 (완료)

- **개발 내용**: Lazy Loading, Memoization, Code Splitting 적용 완료
- **완료 기준**: 성능 최적화가 적용되어 성능이 개선되어야 함. 모든 최적화 작업이 완료됨.

### PR 추가: 개발 서버 및 E2E 테스트 환경 트러블슈팅 (완료)

- **개발 내용**: 개발 서버 실행 오류(EADDRINUSE, 404), 브라우저 콘솔 오류(ERR_NAME_NOT_RESOLVED, WebSocket), Cypress E2E 테스트 서버 연결 실패 문제 해결.
- **완료 기준**: 개발 서버 정상 실행, 브라우저 콘솔 오류 없음, Cypress E2E 테스트 (`chat_page_spec.js`) 통과.
- **참고 문서**: `agenda/PR_Troubleshooting_E2E_DevServer.md`

### PR 8: 테스트 작성 (완료)

- **개발 내용**: 단위 테스트 및 통합 테스트 작성
  - `Avatar`, `Username`, `MessageText` 단위 테스트 완료 (기존 완료)
  - `ChatBubble` 단위 테스트 작성 완료 (기본 아바타 로직 포함).
  - `ChatWindow`, `ChatPage` 단위 테스트 완료 (기존 작성된 내용 검토 및 커버리지 향상).
  - 통합 테스트 (`src/tests/integration/chat_flow_spec.js`) 작성 완료:
    - 메시지 전송 및 채팅창 확인 기능 테스트.
    - `ChatBubble` 및 `ChatPage` 컴포넌트에 `data-testid` 추가하여 테스트 안정성 확보.
    - `cypress.config.js` 수정하여 통합 테스트 경로 추가.
    - 트러블슈팅: 통합 테스트 실행 시 `button[type="submit"]` 선택자 오류 해결.
- **완료 기준**: 모든 단위 테스트 및 통합 테스트가 성공적으로 통과해야 함.

### PR 6.1: 기능 개선 - 프로필 이미지 처리 (완료)

- **개발 내용**: 기존 `via.placeholder.com` 외부 이미지 의존성 제거. 프로젝트 내 기본 SVG 아바타 (`DefaultAvatar.tsx`) 컴포넌트 추가 및 `ChatBubble`에 적용. `avatarSrc`가 제공되지 않을 경우 기본 SVG 아바타 표시.
- **완료 기준**: 외부 이미지 로딩 오류 없이 프로필 이미지가 정상적으로 표시됨.

### PR 9: 문서화 및 배포 준비 (완료)

- **개발 내용**:
  - `README.md` 업데이트: TypeScript 전환, pnpm 사용, 기본 아바타, 테스트 명령어, 최신 파일 구조 반영.
  - `package.json` 업데이트: Cypress 스크립트 추가, `types` 필드 추가, `files` 필드 상세화 (배포 파일 명시), `prepare`/`prepublishOnly` 스크립트에서 `pnpm` 사용.
  - `tsconfig.json` 업데이트: 라이브러리 빌드 옵션(`outDir`, `declaration` 등) 설정 및 `exclude` 경로 추가.
  - `LICENSE` 파일 (ISC) 생성.
  - `src/index.tsx`를 라이브러리 진입점으로 수정 (공개 API export, 예제 코드 제거).
  - 빌드(`pnpm build`) 확인 및 배포될 파일 (`dist/index.js`, `dist/index.d.ts` 등) 제어.
- **완료 기준**: 문서화가 완료되고 npm 패키지 배포를 위한 사전 준비가 완료됨.
