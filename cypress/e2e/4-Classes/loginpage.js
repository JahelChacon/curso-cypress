export class LoginPage{

    username_field = "#username-field";
    password_field = "#password-field";
    submit_btn = "btnSubmit"

    typeUsername(username){
        cy.get(this.username_field).type(username)
    }

    typePassword(password){
        cy.get(this.password_field).type(password)
    }

    submit(){
        cy.get(this.submit_btn).click()
    }



}