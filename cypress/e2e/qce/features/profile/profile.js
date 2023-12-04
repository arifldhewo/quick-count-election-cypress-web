import NavPage from '../../../../pageobjects/NavPage';
import ProfilePage from '../../../../pageobjects/ProfilePage';

    When('user click drop profile in navigation bar', () => {
        NavPage.clickDropProfile();
    });

    And('user click drop item with name of profile', () => {
        NavPage.clickItemProfile();
    });

    When("user rewrite the name with {string}", (name) => {
        ProfilePage.fillName(name);
    });
            
    And('user rewrite the email with {string}', (email) => {
        ProfilePage.fillEmail(email);
    });
            
    And('user click button save profile', () => {
        ProfilePage.clickButtonSaveProfile();
    });

    Then('user get return message with value Saved', () => {
        ProfilePage.getTextSaved().should('be.visible');
    });

    Then('user get return error field name is required', () => {
        ProfilePage.getInputName().then($input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    });

    Then('user get return error field email is required', () => {
        ProfilePage.getInputEmail().then($input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.');
        });
    })

    Then('user get return error field email is missing an @ symbol', () => {
        ProfilePage.getInputEmail().then($input => {
            let value = $input[0].value;
            expect($input[0].validationMessage).to.eq(`Please include an '@' in the email address. '${value}' is missing an '@'.`)
        });
    });

    Then('user get return error field email value is incomplete', () => {
        ProfilePage.getInputEmail().then($input => {
            let value = $input[0].value;
            expect($input[0].validationMessage).to.eq(`Please enter a part following '@'. '${value}' is incomplete.`)
        });
    });