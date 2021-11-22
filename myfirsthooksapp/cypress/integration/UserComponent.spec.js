/// <reference types="cypress" />


describe('test user',()=>{
  /*  it('loads a list of users', () => {
        cy.visit('/users');
        cy.get('[data-testid="users"]').should('have.length',10);
      })*/
    it('should load ten users',()=>{
        cy.intercept('https://jsonplaceholder.typicode.com/users').as('users')
        cy.visit('/users')
        cy.wait('@users').its('response.body')
        .should('be.an', 'Array').and('have.length.gt', 5)
        .then(users => {
          cy.get('[data-testid=users]')
            .should('have.length', users.length)
        })
    })
    it('should test with fixtures',()=>{
        cy.intercept('https://jsonplaceholder.typicode.com/users',{fixture:'users.json'}).as('users')
        cy.visit('/users')
        cy.wait('@users').its('response.body')
        .should('be.an', 'Array').and('have.length.gt', 5)
        .then(users => {
          cy.get('[data-testid=users]')
            .should('have.length', users.length)
        })
    })
})