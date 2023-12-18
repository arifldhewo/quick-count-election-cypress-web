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
}

export default ProfilePage;