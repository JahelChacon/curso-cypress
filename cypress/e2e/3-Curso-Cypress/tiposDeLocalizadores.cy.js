describe('Prueba # 3: Elementos y Localizadores', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    // Buscar por un Tag
    it( 'Obtenerlo por medio de un tag',()=>{
        // cy.once('uncaught:exception', ()=>false)
        cy.visit('/automation-practice-form')
        cy.get('input')
    }),

    // Buscar por un Atributo
    it( 'Obtenerlo por medio de un atributo',()=>{
        cy.get('[placeholder="First Name"]')
    }),

    // Buscar por un Atributo y Tag
    it( 'Obtenerlo por medio de un atributo y un tag',()=> {
        cy.get('input[placeholder="First Name"]')
    }),

    // Buscar por un ID
    it( 'Obtenerlo por medio de un ID',()=> {
        cy.get('#firstName')
    }),

    // Buscar por una Clase
    it( 'Obtenerlo por medio de una clase',()=> {
        cy.get('.mr-sm-2.form-control')
    })

})