class LoginPage{
    static elements = {
        inputEmail      : () => cy.get('#email'),
        inputPass       : () => cy.get('#password'),
        checkRememberMe : () => cy.get('#remember_me'),
        linkRegister    : () => cy.contains('Belum punya akun? Daftar'),
        buttonLogin     : () => cy.get('button'),
        textError       : () => cy.contains('These credentials do not match our records.')
    }
}

export default LoginPage;