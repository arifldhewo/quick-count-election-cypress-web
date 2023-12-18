import NavPage from '../../../../pageobjects/NavPage';
import ProfilePage from '../../../../pageobjects/ProfilePage';

    When('user click drop profile in navigation bar', () => {
        NavPage.elements.dropProfile().click();
    });

    And('user click drop item with name of profile', () => {
        NavPage.elements.liProfile().click();
    });

    When("user rewrite the name with {string}", (name) => {
        name ? ProfilePage.elements.inputName().clear().type(name) : ProfilePage.elements.inputName().clear();
    });
            
    And('user rewrite the email with {string}', (email) => {
        email ? ProfilePage.elements.inputEmail().clear().type(email) : ProfilePage.elements.inputEmail().clear();
    });
            
    And('user click button save profile', () => {
        ProfilePage.elements.buttonSaveProfile().click();
    });

    Then('user get return message with value Saved', () => {
        ProfilePage.elements.textSaved().should('be.visible');
    });

    Then('user get return error field name is required', () => {
        ProfilePage.elements.inputName().then($input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    });

    Then('user get return error field email is required', () => {
        ProfilePage.elements.inputEmail().then($input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.');
        });
    })

    Then('user get return error field email is missing an @ symbol', () => {
        ProfilePage.elements.inputEmail().then($input => {
            let value = $input[0].value;
            expect($input[0].validationMessage).to.eq(`Please include an '@' in the email address. '${value}' is missing an '@'.`)
        });
    });

    Then('user get return error field email value is incomplete', () => {
        ProfilePage.elements.inputEmail().then($input => {
            let value = $input[0].value;
            expect($input[0].validationMessage).to.eq(`Please enter a part following '@'. '${value}' is incomplete.`)
        });
    });