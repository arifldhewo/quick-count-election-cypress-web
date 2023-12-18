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
}

export default RegisterPage;