describe('Prueba #15: Tablas', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable)=> {
        // Return false previene que Cypress falle el test
        return false
    })

    before(()=>{
        cy.visit('https://www.w3schools.com/html/html_tables.asp')
    })

    // Usando Tablas
    it( 'Tablas: Usando tablas',()=> {

        // Usando tablas
        // Encontrando todos los th de una tabla
        cy.get('#customers').find('th').each(($el)=>{
            cy.log($el.text())
        })
    })

    // Selecciona el primero y Assert
    it( 'Tablas: Seleccionando el primero',()=> {
        // Usando solo el primero 
        cy.get('#customers') // Obtiene tabla customers por ID
        .find('th') // Encuentra el th
        .first() // Selecciona solo el primer TH
        .invoke('text') // Invoca la función text()
        .should('equal', 'Company') // Assert -> Debe el texto ser Company 
    })

    // Selecciona uno diferente y assert
    it( 'Tablas: Seleccionando uno diferente',()=> {
        // Usando uno diferente al primero
        cy.get('#customers') // Obtiene tabla customers por ID
        .find('th') // Encuentra el th
        .eq(1) // Selecciona el segundo th por medio del eq -> 1 
        .invoke('text') // Invoca la función text()
        .should('equal', 'Contact') // Assert -> Debe el texto ser Contact 
    })

    // Selecciona otro y assert
    it( 'Tablas: Seleccionando otro diferente',()=> {
        // Usando uno diferente al primero
        cy.get('#customers') // Obtiene tabla customers por ID
        .find('th') // Encuentra el th
        .eq(2) // Selecciona el segundo th por medio del eq -> 1 
        .invoke('text') // Invoca la función text()
        .should('equal', 'Country') // Assert -> Debe el texto ser Contact 
    })

    // Número de filas
    it( 'Tablas: Seleccionando el número de filas',()=> {
        // Numero de filas
        cy.get('#customers') // Obtiene tabla customers por ID
        .find('tr') // Encuentra el tr (filas) (usamos este para ver cuántas filas tiene la tabla)
        .should('have.length', 7) // Assert -> Debe tener 7 elementos de largo (primero usamos find para ver cuántas tiene)
    })

    // Validar elemento de una fila
    it( 'Tablas: Validar elemento de una fila',()=> {
        // Validar info de filas
        cy.get('#customers') // Obtiene tabla customers por ID
        .find('tr') // Encuentra las filas TR 
        .eq(1) // Busca en la primera fila 
        .find('td') // Encuentra los TD (info de la fila)
        .eq(1) // El primer elemento
        .invoke('text') // Invoca la función texto y obtiene el texto
        .should('eq', 'Maria Anders') // Asert -> El texto debe ser 'Maria Anders' 
    })
})