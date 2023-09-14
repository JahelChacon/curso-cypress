describe('Prueba #11: El Input', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    before(()=>{
        cy.visit('/automation-practice-form')
    })

    // Escribiendo en name y last name
    it( 'Inputs Name y Last Name',()=> {

        // Escribir el name y last name
        cy.get('#firstName').type('Jahel')
        cy.get('#lastName').type('Chacon')

        // Limpiar el input 
        cy.get('#firstName').type('{selectAll}{backspace}')
        cy.get('#firstName').type('Josue')

        // Limpiar con clear
        cy.get('#lastName').clear()
        
        
    })
})