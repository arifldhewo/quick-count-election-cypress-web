class ProfilePage{
    static elements = {
        inputName           : () => cy.get('#name'),
        inputEmail          : () => cy.get('#email'),
        buttonSaveProfile   : () => cy.get(':nth-child(1) > .max-w-xl > section > .mt-6 > .flex > .inline-flex'),
        inputCurrentPass    : () => cy.get('#current_password'),
        inputNewPass        : () => cy.get('#password'),
        inputConfirmPass    : () => cy.get('#confirm_password'),
        buttonSavePass      : () => cy.get(':nth-child(2) > .max-w-xl > section > .mt-6 > .flex > .inline-flex'),
        textSaved           : () => cy.contains('Saved.')
    }

    static getInputName() {
        return this.elements.inputName();
    }

    static getInputEmail() {
        return this.elements.inputEmail();
    }

    static getInputCurrentPass() {
        return this.elements.inputCurrentPass();
    }

    static getInputNewPass() {
        this.elements.inputNewPass();
    }

    static getInputConfirmPass() {
        this.elements.inputConfirmPass();
    }

    static fillName(name) {
        const inputName = this.elements.inputName();
        return name ? inputName.clear().type(name) : inputName.clear();
    }

    static fillEmail(email) {
        const inputEmail = this.elements.inputEmail();
        return email ? inputEmail.clear().type(email) : inputEmail.clear();
    }

    static clickButtonSaveProfile() {
        return this.elements.buttonSaveProfile().click();
    }

    static fillCurrentPass(currentPass) {
        const inputCurrentPass = this.elements.inputCurrentPass();
        return currentPass ? inputCurrentPass.clear().type(currentPass) : inputCurrentPass.clear();
    }

    static fillNewPass(newPass) {
        const inputNewPass = this.elements.inputCurrentPass();
        return newPass ? inputNewPass.clear().type(newPass) : inputNewPass.clear();
    }

    static fillConfirmPass(confirmPass) {
        const inputConfirmPass = this.elements.inputConfirmPass();
        return confirmPass ? inputConfirmPass.clear().type(confirmPass) : inputConfirmPass.clear();
    }

    static clickButtonSavePass() {
        return this.elements.buttonSavePass().click();
    }

    static getTextSaved() {
        return this.elements.textSaved();
    }

}

export default ProfilePage;