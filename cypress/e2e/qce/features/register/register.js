import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../../pageobjects/LoginPage";
import RegisterPage from "../../../../pageobjects/RegisterPage";

    When('user click register link', () => {
        LoginPage.clickLinkRegister();
    });

    When('user fill their name field with {string}', (name) => {
        RegisterPage.fillName(name);
    })

    And('user fill their email field with {string}', (email) => {
        RegisterPage.fillEmail(email);
    });

    And('user fill their mobile field number with {string}', (telp) => {
        RegisterPage.fillTelp(telp);
    });

    And('user fill their password field with {string}', (password) => {
        RegisterPage.fillPass(password);
    })

    And('user fill their confirm password field with {string}', (confirm) => {
        RegisterPage.fillConfirmPass(confirm);
    }); 

    And('user click register button', () => {
        RegisterPage.clickButtonRegister();
    });

    Then('user get redirected to login page', () => {
        LoginPage.getRememberMe().should('be.visible');
    });

    Then('system return error field name is required', () => {
        RegisterPage.getInputName().then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field email is required', () => {
        RegisterPage.getInputEmail().then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field telp is required', () => {
        RegisterPage.getInputTelp().then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field password is required', () => {
        RegisterPage.getInputPass().then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field confirm password is required', () => {
        RegisterPage.getInputConfirm().then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field email with the email is already taken', () => {
        RegisterPage.getErrorEmail().should('be.visible');
    });

    Then('system return error field tep with the telp is already been taken', () => {
        RegisterPage.getErrorTelp().should('be.visible');
    });