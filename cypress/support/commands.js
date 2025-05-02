// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').contains('Swag Labs')
    //cy.url().should('include', 'inventory.html')
 
})

// Cypress.Commands.add("login", () => {

//     cy.session(
//         () => {
          
//           cy.get('[data-test="username"]').type('standard_user')
//           cy.get('[data-test="password"]').type('secret_sauce')
//           cy.get('[data-test="login-button"]').click()
//           cy.get('.app_logo').contains('Swag Labs')
//         },
//         {
//           validate: () => {
//             cy.getCookie('auth_key').should('exist')
//           },
//         }
//       )
    
//     // cy.visit('https://www.saucedemo.com')
//     // cy.get('[data-test="username"]').type(email)
//     // cy.get('[data-test="password"]').type(password)
//     // cy.get('[data-test="login-button"]').click()
    
//  })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
