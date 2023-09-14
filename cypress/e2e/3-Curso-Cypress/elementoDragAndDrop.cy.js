describe('Prueba #18: Drag and drops', { viewportWidth: 1920, viewportHeight: 1080 }, ()=>{ // Se usan dimensiones 1920x1080 para que el elemento pueda desplazarse sin dar error
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    before(()=>{
        cy.visit('/dragabble')
    })

    // Usando Drag and drops
    it( 'Drag and drops',()=> {
        // Obtenemos el ID
        cy.get('#dragBox') // Obtenemos el elemento
        .trigger('mousedown', { // Usamos trigger para hacerle click para arrastrarlo
            which:1,
            pageX:600, // Coordenada X
            pageY:100 // Coordenada Y
        }).trigger('mousemove', { // Usamos el mouse move para mover el elemento
            which: 1,
            pageX: 800, // Coordenada X
            pageY: 400 // Coordenada Y
        }).trigger('mouseup') // Usamos el mouse up para soltarlo

    })
})