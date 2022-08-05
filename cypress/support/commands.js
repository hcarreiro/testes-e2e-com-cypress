
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
    username = Cypress.env('USER_EMAIL'),
    password = Cypress.env('USER_PASSWORD'),
    // Passamos um objeto com a propriedade 'cacheSession' com default true
    { cacheSession = true } = {}
  ) => {
    // Temos uma variável 'login' que armazena uma função que executa os passos de login
    const login = () => {
      cy.visit('/login')
      cy.get('#email').type(username)
      cy.get('#password').type(password, { log: false })
      cy.contains('button', 'Login').click()
      cy.contains('h1', 'Your Notes').should('be.visible')
    }
  
    // Se cacheSession igual a true, ou seja, se ele existir
    if (cacheSession) {
        // Utilizamos a funcionalidade 'cy.session' que verifica se existe uma sessão aberta,
        // caso exista a sessão ele recupera, caso não, ele tem a variável login que chama a função de login acima
        cy.session([username, password], login)
    } else {
        // Executa o comando de login
        login()
    }
  })