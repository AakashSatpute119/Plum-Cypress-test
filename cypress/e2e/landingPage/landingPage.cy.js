describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://plumgoodness.com");
  });

  it("Url should contain plumgoodness", () => {
    cy.url().should("contain", "plumgoodness");
  });
});
