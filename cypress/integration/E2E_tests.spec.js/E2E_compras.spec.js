/// <reference types="cypress" />

describe('Agregar producto al carrito de compras', () => {

    beforeEach(() => {
        cy.session('login-session', () => {
            cy.login({ username: 'standard_user', password: 'secret_sauce' });
        });
    });

    it('Agregar primer producto de la lista al carro de compras', () => {
        cy.get('.inventory_list > :nth-child(1)').within(() => {
            cy.contains('Add to cart').click();
            cy.get('[data-test=remove-sauce-labs-backpack]')
              .should('have.text', 'Remove');
        });

        cy.get('.shopping_cart_badge')
          .should('be.visible')
          .and('contain', '1');
    });

    it.skip('Agregar segundo producto de la lista al carro de compras', () => {
        cy.get('.inventory_list > :nth-child(2)').within(() => {
            cy.contains('Add to cart').click();
            cy.get('[data-test=remove-sauce-labs-bike-light]')
              .should('have.text', 'Remove');
        });

        cy.get('.shopping_cart_badge', { timeout: 1000 })
          .should('contain', '2');
    });

    it('Verificar productos en el carro de compras', () => {
        cy.get('.shopping_cart_link').click();
        cy.url().should('include', 'cart.html');
        // Aquí podrías verificar que los productos añadidos están listados
    });
});
