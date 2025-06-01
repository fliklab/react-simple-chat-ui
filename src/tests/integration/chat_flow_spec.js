describe("Chat Flow Integration Test", () => {
  beforeEach(() => {
    cy.visit("/"); // baseUrl은 cypress.config.js 에 설정된 값을 사용
  });

  it("should allow a user to send a message and see it in the chat window", () => {
    const messageText = "Hello, this is an integration test message!";

    // 메시지 입력 필드 찾기 및 입력
    cy.get('input[placeholder="Type a message..."]').type(messageText);

    // 전송 버튼 클릭
    cy.get('[data-testid="send-message-button"]').click();

    // 채팅창에 메시지가 나타나는지 확인
    // ChatBubble 컴포넌트가 렌더링하는 텍스트를 기준으로 검사
    cy.get('[data-testid="chat-bubble"]').should("contain", messageText);

    // 추가적으로, 내가 보낸 메시지는 오른쪽에 정렬되어야 합니다.
    cy.get('[data-testid="chat-bubble"]')
      .last() // 마지막 ChatBubble (방금 보낸 메시지)
      .should("have.attr", "data-align", "right");

    // 입력 필드가 비워졌는지 확인
    cy.get('input[placeholder="Type a message..."]').should("have.value", "");
  });

  // (TODO) 여기에 더 많은 통합 테스트 시나리오 추가 가능
  // 예: 상대방 메시지 수신, 여러 메시지 주고받기, 이미지/파일 메시지 전송 등
});
