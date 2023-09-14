describe('Prueba # 4: Encontrando Elementos', {browser: '!firefox'}, ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    it( 'Ir a la pagina',()=>{
        cy.visit('/automation-practice-form')
    }),

    // Buscar usando Contains
    it( 'Obtenerlo por medio de Contains',()=> {
        cy.contains('Reading')
        cy.contains('.header-wrapper', 'Widgets')
    }),

    // Buscar usando parent
    it.only( 'Obtener el elemento parent del buscado',()=> {
        // Buscando elemento padre
        cy.visit('/automation-practice-form')
        cy.contains('Reading').parent()

        // Buscando elementos parents -> Busca todos los padres, pero muestra los 12 anteriores
        cy.contains('Reading').parents()

        // Buscando elementos parents -> Busca especificamente por los label 
        cy.contains('Reading').parents().find('label')

        // Buscando elementos -> Busca primero el form y luego los hijos "label"
        cy.get('form').find('label')
    })

})