describe("ChatPage Integration Test", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  it("should load the chat page and send a message", () => {
    cy.visit("http://localhost:3018");
    cy.wait(1000);

    cy.get('input[placeholder="Type a message..."]').type("Hello, Cypress!");
    cy.contains("Send").click();

    cy.contains("Hello, Cypress!").should("be.visible");
  });
});
