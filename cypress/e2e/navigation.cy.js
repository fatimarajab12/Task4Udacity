describe('Navigation Page Routing Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should render the Home page by default', () => {
    cy.get('main').should('contain.text', 'A Digital Study Solution for the Modern World');
  });

  it('should navigate to the About page on click', () => {
    cy.get('#aboutPage').click();
    cy.get('main').should('contain.text', 'About Study Night');
    cy.get('main').should('contain.text', 'Flash Cards Anywhere Anytime');
  });

  it('should navigate to the Card Sets page on click', () => {
    cy.get('#cardSetPage').click();
    cy.get('main').should('contain.text', 'Study Set Library');
    cy.get('main').should('have.descendants', 'ul.setContainer');
  });

  it('should navigate back to the Home page on click', () => {
    cy.get('#homePage').click();
    cy.get('main').should('contain.text', 'A Digital Study Solution for the Modern World');
  });
});
