describe('Navigation Bar UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('shows the header title correctly', () => {
    cy.get('[data-cy="header"]').should('contain.text', 'Study Night');
  });

  it('has three navigation items with correct text', () => {
    cy.get('nav.primary_nav_bar li').should('have.length', 3);
    cy.get('#homePage').should('have.text', 'Home');
    cy.get('#aboutPage').should('have.text', 'About');
    cy.get('#cardSetPage').should('have.text', 'Card Sets');
  });

  it('allows clicking navigation items', () => {
    cy.get('#homePage').click();
    cy.get('#aboutPage').click();
    cy.get('#cardSetPage').click();
  
  });
});
