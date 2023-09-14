describe('Prueba #5: Guardando Elementos', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    // Evitar repetición
    it( 'Guardando el elemento deseado',()=> {
        // Entra a la pagina 
        cy.visit('/automation-practice-form')
        
        // Aquí se usa un comando Cypress para seleccionar el input First Name, luego al objeto resultante se le saca una funcion
        // que busca el padre de ese input, por ultimo se hace una funcion callback con ese form que es el padre y se realizan acciones dentro
        cy.get('input[placeholder="First Name"]').parents('form').then((form)=>{
            const inputs = form.find('input') // Encontrar todos los elementos input dentro del formulario
            const divs = form.find('div') // Encontrar todos los elementos div dentro del formulario
            const labels = form.find('label') // Encontrar todos los elementos label dentro del formulario

            expect(inputs.length).to.eq(15) // Verificar que el número de elementos inputs sea 15
            cy.wrap(inputs).should('have.length', 15) // Verificar que el número de elementos inputs sea 15 (otra forma de hacerlo)
            expect(divs.length).to.eq(70) // Verificar que el número de elementos divs sea 70
            expect(labels.length).to.eq(16)

        })

        // Buscando elementos -> Busca primero el form y luego los hijos "label"
        cy.get('form').find('div')
    })
})