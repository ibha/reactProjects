describe('Home Component Test', ()=>{
    it('should load home component',()=>{
    cy.visit ('/');
    cy.get('[data-testid="HomeComponent"]').should('have.text','HomeComponent Component')
    })
}
)