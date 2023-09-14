before(()=>{
    cy.visit('/automation-practice-form')
})

describe('Prueba #9: Tipos de Espera', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    // Esperas
    it( 'Esperar por un tiempo definido',()=> {
        // Espera 2s
        cy.wait(2000)
    }),

    it( 'Esperar por un elemento',()=> {
        // Espera un máximo de 6s por ese elemento
        cy.get('#uploadPicture', {timeout: 6000})
    }),

    it( 'Esperar por un elemento y hacer assert',()=> {
        // Espera 6s 
        cy.get('#uploadPicture', {timeout: 6000}).should('be.visible')
    })
})

describe('Prueba #9b: Tipos de Espera', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    // Esperas
    it( 'Deshabilitar retry',()=> {
        // Esto evita que Cypress espere por el elemento para cargar
        cy.get('#uploadPicture', {timeout:0}) 
    })
})