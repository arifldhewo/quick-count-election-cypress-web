class RegisterPage{
    static elements = {
        inputName       : () => cy.get('#name'),
        inputEmail      : () => cy.get('#email'),
        inputTelp       : () => cy.get('#telp'),
        inputPass       : () => cy.get('#password'),
        inputConfirm    : () => cy.get('#password_confirmation'),
        linkLogin       : () => cy.contains('Already registered? Login'),
        buttonRegister  : () => cy.get('button'),
        errorEmail      : () => cy.contains('The email has already been taken.'),
        errorTelp       : () => cy.contains('The telp has already been taken')
    }

    static getErrorEmail() {
        return this.elements.errorEmail();
    }

    static getErrorTelp() {
        return this.elements.errorTelp();
    }

    static getInputName(){
        return this.elements.inputName();
    }

    static getInputEmail() {
        return this.elements.inputEmail();
    }

    static getInputTelp(){
        return this.elements.inputTelp();
    }

    static getInputPass(){
        return this.elements.inputPass();
    }

    static getInputConfirm() {
        return this.elements.inputConfirm();
    }

    static getLinkLogin(){
        return this.elements.linkLogin();
    }

    static getButtonRegister(){
        return this.elements.buttonRegister();
    }

    static fillName(name){
        this.elements.inputName().clear();
        name ? this.elements.inputName().type(name) : '';
    }

    static fillEmail(email){
        this.elements.inputEmail().clear();
        email ? this.elements.inputEmail().type(email) : '';
    }

    static fillTelp(telp){
        this.elements.inputTelp().clear();
        telp ? this.elements.inputTelp().type(telp) : '';
    }

    static fillPass(pass){
        this.elements.inputPass().clear();
        pass ? this.elements.inputPass().type(pass) : '';
    }

    static fillConfirmPass(confirm){
        this.elements.inputConfirm().clear();
        confirm ? this.elements.inputConfirm().type(confirm) : '';
    }

    static clickLinkLogin(){
        return this.elements.linkLogin().click();
    }

    static clickButtonRegister(){
        return this.elements.buttonRegister().click();
    }

}

export default RegisterPage;