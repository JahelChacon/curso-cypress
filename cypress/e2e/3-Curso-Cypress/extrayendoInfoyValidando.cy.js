describe('Prueba #13: Extrayendo Información y Haciendo Validaciones', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    before(()=>{
        cy.visit('/automation-practice-form')
    })

    // Esta es la forma NO recomendada por Cypress de pasar info de un it a otro
    let texto

    // Extrayendo Información
    it( 'Extrayendo Información del First Name',()=> {
        
        // Haciendo un alias y escribiendo 
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Jahel')

        // Extrayendo text forma 1 -> Usando jQuery
        cy.get('@nombre').then(($nombre)=>{
            
            // Asignando elemento (mala manera)
            texto = $nombre.val()

            // Valida que lo que se escribió sea lo correcto usando jQuery
            expect($nombre.val()).to.equal('Jahel') 

        })


        // Lo mismo pero sin jQuery
        // Invoca la funcion val() y hace un assert para verificar que sea igual a 'Jahel'
        cy.get('@nombre').invoke('val').should('equal', 'Jahel')
        // Invoca val() y lo guarda como una variable global para usarse abajo
        cy.get('@nombre').invoke('val').as('nombreGlobal')      
    })

    // Extrayendo Información
    it( 'Extrayendo Información del Last Name',()=> {
        
        // Haciendo un alias y escribiendo         
        cy.get('#lastName').as('apellido')
        cy.get('@apellido').type('Chacon')

        // Usando la función val() para guardarla como alias global
        cy.get('@apellido').invoke('val').as('apellidoGlobal')
        
    })

    // Pasando información (mala manera)
    // it( 'Pasar información manera incorrecta',()=> {
        
    //     // Pasando información
    //     cy.get('#lastName').as('nombre2')
    //     cy.get('@nombre2').type(texto)
        
    // })

    // Pasando información (Manera correcta)
    //Para que funcione TIENE que ser [function()] en lugar de [()=>], porque el function guarda contexto, las flechas no
    it( 'Pasar información manera correcta',function() { 
        
        // Pasando información
        cy.get('#lastName').as('nombre2')
        cy.get('@nombre2').type(this.nombreGlobal) // Obtiene nombre global
        cy.get('@nombre2').type(this.apellidoGlobal) // Obtiene apellido global
        
    })
})