# 변경 로그

모든 주요 변경 사항은 이 파일에 기록됩니다.

## [0.0.2] - 2024-06-01

### 수정됨

- 패키지 배포 시 `dist` 폴더 전체를 포함하도록 `package.json`의 `files` 설정을 변경하여, 라이브러리 사용 시 내부 모듈 경로 참조 오류 해결 (`Module not found: Can't resolve './components/atoms/Avatar'` 등).

## [0.0.1] - 2024-06-01

### 추가됨

- 초기 패키지 배포.
- 주요 컴포넌트 (`ChatPage`, `ChatWindow`, `ChatBubble`, `Avatar` 등) 구현.
- TypeScript 기반 프로젝트 설정.
- Jest를 사용한 단위 테스트 및 Cypress를 사용한 E2E/통합 테스트 환경 구축.
- 기본 SVG 아바타 지원.
- `react-i18next`를 통한 다국어 지원 준비 (애플리케이션 레벨 설정 필요).
- README 문서 및 개발/빌드/테스트 스크립트 제공.
- ISC 라이선스 적용.
