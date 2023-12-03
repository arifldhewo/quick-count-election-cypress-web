class ProfilePage{
    static elements = {
        inputName           : () => cy.get('#name'),
        inputEmail          : () => cy.get('#email'),
        buttonSaveProfile   : () => cy.get(':nth-child(1) > .max-w-xl > section > .mt-6 > .flex > .inline-flex'),
        inputCurrentPass    : () => cy.get('#current_password'),
        inputNewPass        : () => cy.get('#password'),
        inputConfirmPass    : () => cy.get('#confirm_password'),
        buttonSavePass      : () => cy.get(':nth-child(2) > .max-w-xl > section > .mt-6 > .flex > .inline-flex'),
        textSaved           : () => cy.get('.flex > .text-sm')
    }

    static fillName(name) {
        this.elements.inputName().clear();
        this.elements.inputName().type(name);
    }

    static fillEmail(email) {
        this.elements.inputEmail().clear();
        this.elements.inputEmail().type(email);
    }

    static clickButtonSaveProfile() {
        return this.elements.buttonSaveProfile().click();
    }

    static fillCurrentPass(currentPass) {
        return this.elements.inputCurrentPass().type(currentPass)
    }

    static fillCurrentPass(NewPass) {
        return this.elements.inputCurrentPass().type(NewPass)
    }

    static fillCurrentPass(confirmPass) {
        return this.elements.inputCurrentPass().type(confirmPass)
    }

    static clickButtonSavePass() {
        return this.elements.buttonSavePass().click();
    }

    static getTextSaved() {
        return this.elements.textSaved();
    }

}

export default ProfilePage;