describe('Prueba #7: Hooks', {browser: 'firefox'}, ()=>{ 
    // Ejecuta esto antes de todas las pruebas
    before(()=> {
        cy.visit('/automation-practice-form')
    })

    // Ejecuta el before antes de cada prueba (cada it)
    // beforeEach(()=>{
    //     cy.visit('/automation-practice-form')
    // })

    // Ejecuta esto después de todas las pruebas
    after(()=>{
        cy.visit('https://www.google.com')
    })

    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    // Evitar repetición
    it( 'Asserts',()=> {
        
        //Verifica que la URL incluya 'demoqa.com'
        cy.url().should('include','demoqa.com')

        // Verificar que el campo de nombre sea visible
        cy.get('#firstName').should('be.visible')
        
        // Verificar que el campo de nombre tenga el placeholder "First Name"
        cy.get('#firstName').should('have.attr', 'placeholder', 'First Name')
        
    })
})