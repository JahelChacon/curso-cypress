describe('Prueba #6: Asserts', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    // Evitar repetición
    it( 'Asserts',()=> {
        // Entra a la pagina 
        cy.visit('/automation-practice-form')
        
        //Verifica que la URL incluya 'demoqa.com'
        cy.url().should('include','demoqa.com')

        // Verificar que el campo de nombre sea visible
        cy.get('#firstName').should('be.visible')
        
        // Verificar que el campo de nombre tenga el placeholder "First Name"
        cy.get('#firstName').should('have.attr', 'placeholder', 'First Name')
        
    })
})