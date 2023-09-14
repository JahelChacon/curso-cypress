import { LoginPage } from "../4-Classes/loginpage"
import { LandingPage } from "../4-Classes/landingPage"

const loginPage = new LoginPage()
const landingPage = new LandingPage()


describe('funciones', ()=>{

    before(()=>{
        cy.visit('google.com')
    })

    it('Assert', ()=>{

        loginPage.typeUsername('usuario')
        loginPage.typePassword('password')
        loginPage.submit()

        cy.get('#titulo').should('be visible')
    
    })

    it('ejemplo2', ()=>{


        loginPage.typeUsername('wronguser')
        loginPage.typePassword('wrongpassword')
        loginPage.submit_btn()

        cy.get('#titulo').should('be visible')
        
    })

})

describe('Landing Page', ()=>{
    before(()=>{
        cy.visit('google.com')
    })

    it('Form', ()=>{

        landingPage.typeName(Name)
        landingPage.typeLastName(LastName)
        landingPage.typeNumber(PhoneNumber)
        landingPage.clickSubmit()
    })
})