describe('Prueba #12: Checkboxes y Radio Buttons', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    before(()=>{
        cy.visit('/automation-practice-form')
    })

    // Usando Radio Buttons
    it( 'Radio Buttons',()=> {

        // Encuentra el radio button y le hace click
        cy.get('label').contains('Male').click()
        
        // OTRA MANERA DE HACERLO 
        // SOLO con el force:true se le puede hacer click así, pero no es la mejor forma de hacerlo
        // cy.get('#gender-radio-1').click({force:true}) 

        // OTRA MANERA DE HACERLO 2
        // cy.get('label[form="gender-radio-1"]').click() 
        
    })

    // Usando Checkboxes
    it( 'Checkboxes',()=> {

        // Encuentra el Checkbox y lo selecciona 
        cy.get('label').contains('Sports').click()
        cy.get('label').contains('Reading').click()
        cy.get('label').contains('Sports').click()
        
        // OTRA MANERA DE HACERLO 
        // SOLO con el force:true se le puede hacer click así, pero no es la mejor forma de hacerlo
        // cy.get('#hobbies-checkbox-1').check({force:true}) 

        // OTRA MANERA DE HACERLO 2
        // cy.get('label[form="hobbies-checkbox-1"]').click() 

        // Darle Uncheck
        // Para darle uncheck solo hay que darle otro click al elemento
        
        
    })
})