describe('Prueba #2: Navegacion', { testIsolation: false }, () => {
    it('Navegar a nuestra primera pagina', () => {
        cy.visit('https://www.google.com')
    })

    it('Recargar pagina', () => {
        cy.reload()
    })

    //Recargar de forma forzada (sin cache)
    it( 'Recargar página de forma forzada',()=>{
        cy.visit("https://www.duolingo.com")
        cy.reload(true) // Recargar sin Cache
    }),

    // El atributo ONLY -> Esto hace que SOLO se ejecute esta prueba  
    // it.only( 'Recargar página',()=>{
    //     cy.visit("https://www.duolingo.com")
    //     cy.reload(true) // Recargar sin Cache
    // }),

    // Ir hacia atrás en la página
    it( 'Ir hacia atrás',()=>{
        cy.visit("https://www.duolingo.com")
        cy.visit("https://www.duolingo.com/register")
        cy.go("back")
        // Se puede usar cy.go("back") o cy.go(-1) donde el número es el índice 
        // cy.go(-1)
    }),

    // Ir hacia adelante en la página
    it( 'Ir hacia adelante',()=>{
        cy.visit("https://www.duolingo.com")
        cy.visit("https://www.duolingo.com/register")
        cy.go(-1)
        cy.go("forward")
        // Se puede usar cy.go("back") o cy.go(+1) donde el número es el índice 
        // cy.go(+1)
    })
})