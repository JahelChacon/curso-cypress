export class LandingPage{

    formName = '#txtName';
    formLastName = '#txtLastName';
    formNumber = '#txtNumber';
    submitbtn = '#btnSubmit'

    typeName(Name){
        cy.get(this.formName).type(Name);
    }

    typeLastName(LastName){
        cy.get(this.formLastName).type(LastName);
    }

    typeNumber(PhoneNumber){
        cy.get(this.formNumber).type(PhoneNumber);
    }

    clickSubmit(){
        cy.get(this.submitbtn).click()
    }

}