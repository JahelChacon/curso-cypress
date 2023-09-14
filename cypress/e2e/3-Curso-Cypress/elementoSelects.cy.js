describe('Prueba #14: Selects y Dropdowns', {testIsolation:true}, ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    // Usando Dropdowns
    it( 'Dropdowns',()=> {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // Usando un dropdown
        cy.get('.custom-select').select(10) // Selecciona el elemento 10
        cy.get('.custom-select').select(3).should('have.value', 3) // Selecciona el 3 y verifica que tenga valor 3(BackEnd)
        cy.get('.custom-select').select('Greece').should('have.value', 4) // Selecciona 'Greece' y verifica que el valor sea 4
            
    })

    // Usando selects dinámicos
    it( 'Dropdowns dinámicos',()=> {
        cy.visit('https://react-select.com/home')
        
        // Dropdown dinamico
        cy.get('#react-select-6-input').type(' ') // Pone espacio vacío para que muestre todo
        
        // Esta es la manera normal de hacerlo sabiendo el ID
        cy.get('#react-select-6-option-2').click()

        // Otra manera correcta de hacerlo, por medio de texto
        cy.get("#react-select-6-listbox")
        .children()
        .children()
        .contains("Red")
        .click();

        // Esta es una manera de hacerlo por jQuery por medio de texto
        // cy.get('#react-select-6-listbox').children().children().each(($el, number, $list)=>{ 
        //     if($el.text()== 'Red'){
        //         //$el.on('click')
        //         $el.click() // Forma antigua
        //     }
        // })
            
    })
})