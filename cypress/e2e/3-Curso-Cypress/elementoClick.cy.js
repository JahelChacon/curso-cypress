describe('Prueba #10: Interactuando con los Elementos', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    before(()=>{
        cy.visit('/buttons')
    })

    // Hacer click
    it( 'Click',()=> {

        // Busca el tag botones con el identificador 3
        cy.get('button').eq(3).click()

        // Hace la aserción de que el mensaje esté visible y el texto sea el correcto 
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click')

        // Hace un double click 
        cy.get('#doubleClickBtn').dblclick()
        
    })

    // Hacer double click 
    it( 'Double click',()=> {

        // Hace un double click 
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
        
    })

    // Hacer right click 
    it( 'Right click',()=> {

        // Hace un right click 
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have done a right click')
        
    })

    // Hacer force click 
    it( 'Force click',()=> {
        cy.visit('/dynamic-properties')

        // Hace un force click 
        // Esto se hace cuando ocupamos darle click a un elemento deshabilitado, pero no es recomendable porque no sigue
        // el flujo de trabajo normal 
        cy.get('#enableAfter').click( { force: true } )
        
    })

    // Hacer click por posicion 
    it( 'Click por posicion',()=> {
        cy.visit('/buttons')

        // Hace un click por posicion
        cy.get('button').eq(3).parent().parent().click('topRight') // Hacer click al div padre en la esquina derecha
        cy.get('button').eq(3).parent().parent().click('bottomLeft') // Hacer click al div padre en la parte de abajo izquierda
        cy.get('button').eq(3).parent().parent().click(60, 20) // Hacer click con coordenadas
        
    })
})