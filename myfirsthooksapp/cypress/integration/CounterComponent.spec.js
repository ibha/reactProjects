describe ('Counter Test', () => {
    it ('is working', () => {
        cy.visit ('/counter');
        cy.get('[data-testid="result"]').should('have.text',0);
        cy.get('[data-testid="counterButton"]').click();
        cy.get('[data-testid="result"]').should('have.text',1);
    });
  });