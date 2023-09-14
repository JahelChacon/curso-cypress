describe('Prueba #1: Primera Prueba', () => {
    it('Navegar a nuestra primera pagina', () => {
        cy.visit('https://www.google.com')
    })

    it('Navegar a nuestra segunda pagina', () => {
        cy.visit('https://www.duolingo.com')
    })
})