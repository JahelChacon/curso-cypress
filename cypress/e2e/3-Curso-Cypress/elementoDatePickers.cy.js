describe('Prueba #16: Date Pickers', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    before(()=>{
        cy.visit('https://material.angular.io/components/datepicker/overview')
    })

    // Usando Date Pickers
    it( 'Date Pickers: Buscar por elemento y find',()=> {
        // Buscar por el elemento datepicker y usar find y eq para llegar al label 
        cy.get('datepicker-overview-example')
        .find('label')
        .eq(0)
        .type('11/03/2022')
    })

    // Usando Date Pickers
    it( 'Date Pickers: Buscar por ID',()=> {
        // Limpiar campos
        cy.get('#mat-mdc-form-field-label-0').type('{selectAll}{backspace}') 
        // Buscar elemento por ID del label 
        cy.get('#mat-mdc-form-field-label-0').type('11/03/2022')
    })

    // Usando el icono
    it( 'Date Pickers: Abrir con ícono',()=> {
        // Limpiar campos
        cy.get('#mat-mdc-form-field-label-0').type('{selectAll}{backspace}') 
        //  
        cy.get('datepicker-overview-example').find('button').click()
    })
})