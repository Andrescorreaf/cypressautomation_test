/// <reference types="cypress" />

import { navigate } from "../page-objects/todo-page"

describe('todo Filter actions', () => {
    beforeEach(()=>{
        // cy.visit('http://todomvc-app-for-testing.surge.sh/')

        navigate()
    
        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.new-todo').type("Learn JavaScript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()

    })
    it('should filter "Active" todos', () => {

        cy.contains('Active').click
        cy.get('.todo-list li').should('have.length', 3)
    
    })
    it('should filter "Completed" todos', () => {

        cy.contains('Completed').click
        cy.get('.todo-list li').should('have.length', 3)
    
    })
    it('should filter "All" todos', () => {

        cy.contains('All').click
        cy.get('.todo-list li').should('have.length', 3)
    
    })
})