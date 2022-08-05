
// Comando customizado para realização do signup
Cypress.Commands.add('fillSignupFormAndSubmit', (email, password) => {
    cy.visit('/signup')
    cy.get('#email').type(email)
    cy.get('#password').type(password, { log: false })
    cy.get('#confirmPassword').type(password, { log: false })
    cy.contains('button', 'Signup').click()
    cy.get('#confirmationCode').should('be.visible')
})

// Comando customizado para realização de login
Cypress.Commands.add('login', (
    userName = Cypress.env('USER_EMAIL'),
    password = Cypress.env('USER_PASSWORD')
) => {  
    cy.visit('/login')
    cy.get('#email').type(userName)
    cy.get('#password').type(password, { log: false })
    cy.contains('button', 'Login').click()
    cy.contains('h1', 'Your Notes').should('be.visible')
})
