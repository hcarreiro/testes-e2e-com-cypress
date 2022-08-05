/// <reference types="Cypress" />

it('successfully logs in', () => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.login()
    cy.contains('h1', 'Your Notes').should('be.visible')
})