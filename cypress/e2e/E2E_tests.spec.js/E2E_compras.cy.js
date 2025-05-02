/// <reference types="cypress" />

describe('Agregar producto al carrito de compras', () =>{
   

        
    before(()=>{

        // Cypress.Cookies.preserveOnce('true')
        //cy.visit('https://www.saucedemo.com/')
        cy.login({ username: 'standard_user', password: 'secret_sauce' }) 
        // cy.getCookie('sessionCookie').then(cookie => {
        //     if (cookie) {
        //       cy.setCookie('sessionCookie', cookie.value);
        //     }
        // })
        // // cy.setCookie('sessionCookie', 'valorDeTuCookie');

    })
        
    it('Agregar primer producto de la lista al carro de compras', () =>{        
        
        cy
            .get('.inventory_list > :nth-child(1)')
            .within(()=> {
                cy
                .contains('Add to cart').trigger('click')
                // .click()
                .get('[data-test=remove-sauce-labs-backpack]').should('have.text', 'Remove')
            })
            cy.get('.shopping_cart_badge').should('be.visible').contains('1')

    })
    it.skip('Agregar segundo producto de la lista al carro de compras', () =>{

        cy
            .get('.inventory_list > :nth-child(2)')
            .within(()=> {
                cy
                .contains('Add to cart').trigger('click')
                .get('[data-test=remove-sauce-labs-bike-light]').should('have.text', 'Remove')
            })
        cy.get('.shopping_cart_badge', {timeout: 1000}).contains('2')

    })

    it('Verificr productos en el carro de compras', () => {
        cy.get('.shopping_cart_link').click() 
        cy.url().should('include', 'cart.html')       


    })


})