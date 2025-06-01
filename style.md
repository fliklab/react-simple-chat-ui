# 디자인 가이드

## 색상 팔레트

- **Primary Color**: #3498db
- **Secondary Color**: #2ecc71
- **Background Color**: #ecf0f1
- **Text Color**: #2c3e50

## 타이포그래피

- **Font Family**: 'Roboto', sans-serif
- **Base Font Size**: 16px
- **Heading Font Weight**: 700
- **Body Font Weight**: 400

## 레이아웃

- **Spacing Unit**: 8px
- **Border Radius**: 4px

## 컴포넌트 스타일

- **Avatar**: 원형, 40px x 40px
- **ChatBubble**:
  - **모양**: 둥근 모서리, 그림자 효과
  - **배경색**: 사용자의 메시지는 Primary Color, 상대방의 메시지는 Secondary Color
  - **텍스트 정렬**: 사용자의 메시지는 오른쪽 정렬, 상대방의 메시지는 왼쪽 정렬
  - **반응형**: 모바일에서는 최대 너비 80%, 데스크탑에서는 최대 너비 60%
- **ChatWindow**:
  - **모양**: 스크롤 가능한 영역, 상하 패딩 16px
  - **배경색**: Background Color
  - **반응형**: 모바일에서는 전체 너비 사용, 데스크탑에서는 중앙 정렬 및 최대 너비 800px

## 반응형 디자인

- **Mobile Breakpoint**: 600px 이하
- **Tablet Breakpoint**: 768px 이상 1024px 이하
- **Desktop Breakpoint**: 1024px 이상

## 반응형 디자인 (상세)

- **모바일**:

  - ChatBubble의 최대 너비를 80%로 설정하여 작은 화면에서도 적절한 여백 유지
  - ChatWindow는 전체 너비를 사용하여 화면을 최대한 활용

- **데스크탑**:
  - ChatBubble의 최대 너비를 60%로 설정하여 넓은 화면에서 가독성 유지
  - ChatWindow는 중앙에 정렬하고 최대 너비를 800px로 제한하여 일관된 레이아웃 유지

이 가이드는 일관된 디자인을 유지하고, 다양한 디바이스에서 최적의 사용자 경험을 제공하기 위해 설정되었습니다.
