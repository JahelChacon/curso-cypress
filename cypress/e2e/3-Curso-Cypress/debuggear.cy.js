describe('Prueba #8: Debuggear', ()=>{ 
    // Ejecuta esto antes de todas las pruebas
    before(()=> {
        cy.visit('/automation-practice-form')
    })

    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    // Evitar repetición
    it( 'Guardando el elemento deseado',()=> {
        cy.visit('/automation-practice-form')
        
        cy.get('input[placeholder="First Name"]').parents('form').then((form)=>{
            const inputs = form.find('input') 

            expect(inputs.length).to.eq(15) 
            cy.wrap(inputs).should('have.length', 15)

            // Imprime el task en temrinal 
            cy.task('log', inputs.length)
            // Pausa la ejecución
            cy.pause()
            // El log nativo de cypress
            cy.log('Soy el mensaje de Cypress, longitud', inputs.length)

        })

        // Imprime el elemento en consola del navegador
        cy.get('input[placeholder="First Name"]').then(console.log)
        // Este comando nos permite seleccionar desde la consola el elemento debug y nos muestra el elemento completo
        cy.get('input[placeholder="First Name"]').debug()
    })
})