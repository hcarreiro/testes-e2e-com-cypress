/// <reference types="Cypress" />

it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.login(
    // Como definido na variável tenho que passar agora 3 parametros: user, senha e objeto session
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD'),
    // como estamos passando o cacheSession false, ele vai entrar no else do comando login pra fazer o login padrão
    { cacheSession: false}
  )
  cy.wait('@getNotes')
})