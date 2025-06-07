describe('Flashcard Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
    cy.get('#cardSetPage').click();
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('#titleInput').type('Biology Terms');
    cy.get('[data-cy="set_form"]').submit();
    cy.contains('Biology Terms').click();
  });

  it('should display an error if inputs are empty', () => {
    cy.get('[data-cy="card_form"]').submit();
    cy.contains('TERM AND DESCRIPTION CANNOT BE EMPTY').should('exist');
  });

  
  // it('should add a new flashcard', () => {
  //   cy.get('#termInput').type('Mitochondria');
  //   cy.get('#descriptionInput').type('The powerhouse of the cell');
  //   cy.get('[data-cy="card_form"]').submit();

  //   cy.contains('Mitochondria').should('exist');
  //   cy.contains('The powerhouse of the cell').should('exist');
  // });
});
