// cypress/support/index.ts
declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to login in the site via UI.
         * @example cy.login('user_email, user_passw')
         */
        login(value: string): Chainable<JQuery<HTMLElement>>
      }
    }
  }