describe('Prueba #17: Popups y Tooltips', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    before(()=>{
        cy.visit('/modal-dialogs')
    })

    // Usando Modals
    it( 'Popups: Modals',()=> {
        // Encontrando el modal y haciendole click
        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()
    })

    // Usando Alerts
    it( 'Popups: Alerts',()=> {
        cy.visit('/alerts')

        cy.get('#confirmButton').click()

        const stub = cy.stub() // Declara el stub. Esto permite interceptar los eventos del window 

        cy.on('window:confirm', stub) // Llamamos el stub en el window:confirm 

        // Es un listener, escucha los eventos, el stub es una forma de interceptar la llamada/evento
        cy.get('#confirmButton') // Encuentra el boton
        .click() // Le hace click
        .then(()=>{ // Entonces crea una función de jQuery
            // esperamos que el stub en el campo 0 sea llamado con el texto descrito
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?') 
        })

        cy.contains('You selected Ok').should('exist') // Verifica que el texto de confirmación exista
    })

    // Usando Alerts
    it( 'Popups: Alerts segunda manera',()=> {
        cy.get('#confirmButton').click() // Hace click al elemento

        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.equal('Do you confirm action?')
        })

        cy.contains('You selected Ok').should('exist') // Verifica que el texto de confirmación exista
    })

    // Usando Alerts rechazando la laerta
    it( 'Popups: Rechazando la alerta',()=> {
        cy.get('#confirmButton').click() // Hace click al elemento

        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.equal('Do you confirm action?')
            return false
        })

        cy.contains('You selected Cancel').should('exist') // Verifica que el texto de confirmación exista
    })

    // Usando Alerts rechazando la laerta
    it( 'Popups: Tooltips',()=> {
        cy.visit('tool-tips')

        // Ponemos el mouse en el button
        cy.get('#toolTipButton').trigger('mouseover') // Usamos trigger para usar mouse over
        cy.contains('You hovered over the Button').should('exist')

        // Quitamos el mouse del button
        cy.get('#toolTipButton').trigger('mouseout')// Usamos trigger para usar mouse out
        cy.contains('You hovered over the Button').should('not.exist')
    })
})