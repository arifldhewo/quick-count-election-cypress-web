class LoginPage{
    static elements = {
        inputEmail      : () => cy.get('#email'),
        inputPass       : () => cy.get('#password'),
        checkRememberMe : () => cy.get('#remember_me'),
        linkRegister    : () => cy.contains('Belum punya akun? Daftar'),
        buttonLogin     : () => cy.get('button'),
        textError       : () => cy.contains('These credentials do not match our records.')
    }

    static getInputEmail() {
        return this.elements.inputEmail();
    }

    static getInputPass() {
        return this.elements.inputPass();
    }

    static getCheckRememberMe() {
        return this.elements.checkRememberMe();
    }

    static getLinkRegister() {
        return this.elements.linkRegister();
    }

    static getButtonLogin() {
        return this.elements.buttonLogin();
    }

    static getTextError() {
        return this.elements.textError();
    }

    static fillEmail(email) {
        return email ? this.elements.inputEmail().type(email) : '';
    }

    static fillPass(pass) {
        return pass ? this.elements.inputPass().type(pass) : '';
    }

    static clickRememberMe() {
        return this.elements.checkRememberMe().click();
    }

    static clickLinkRegister() {
        return this.elements.linkRegister().click();
    }

    static clickButtonLogin() {
        return this.elements.buttonLogin().click();
    }

    static getTextError() {
        return this.elements.textError();
    }

    static getRememberMe() {
        return this.elements.checkRememberMe();
    }
}

export default LoginPage;