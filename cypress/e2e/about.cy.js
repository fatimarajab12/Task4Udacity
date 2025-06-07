describe("About Page UI Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234"); 
    cy.get("#aboutPage").click(); // نضغط على زر About من الناف بار
  });

  it("should display the main heading", () => {
    cy.contains("h2", "About Study Night").should("be.visible");
  });

  it("should display the subheading", () => {
    cy.contains("h3", "Flash Cards Anywhere Anytime").should("be.visible");
  });

  it("should display the paragraph text", () => {
    cy.get(".textContainer p").should("be.visible");
  });

});
