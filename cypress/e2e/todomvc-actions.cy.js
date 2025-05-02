/// <reference types="cypress" />

import * as TodoPage from "../page-objects/todo-page"

// Con describe agrupamos nuestro script en un grupo
// En beforeEach ponemos el script que se debe iniciar antes de cada prueba, 
//     esto sirve para que cada pruebas funcione indepndiente de la anterior y evitar duplicado de codigo

describe('todo actions', () => {
    
    beforeEach(()=>{

        TodoPage.navegate()

        // addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
    
        TodoPage.addTodo('Clean room')
        // validateTodoTxt(0, 'Clean room')
        // cy.get('.toggle').should('not.be.checked')
    
    })
    
    // it('should mark a todo as completed', () => {
    //     cy.get('.toggle').click()
    //     cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
        
    // })
    
    // it('should clear completed todos', () => {
    //     cy.get('.toggle').click()
    //     cy.contains("Clear").click()
    //     cy.get('.todo-list').should('not.have.descendants', 'li')
        
    // })
})

