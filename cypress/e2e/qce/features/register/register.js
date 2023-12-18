import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../../pageobjects/LoginPage";
import RegisterPage from "../../../../pageobjects/RegisterPage";
const { faker } = require('@faker-js/faker');

    When('user click register link', () => {
        LoginPage.elements.linkRegister().click();
    });

    When('user fill their name field with {string}', (name) => {
        name ? RegisterPage.elements.inputName().type(name) : '';
    })

    And('user fill their email field with {string}', (email) => {
        email ? RegisterPage.elements.inputEmail().type(email) : '';
    });

    And('user fill their mobile field number with {string}', (telp) => {
        telp ? RegisterPage.elements.inputTelp().type(telp) : '';
    });

    And('user fill their password field with {string}', (password) => {
        password ? RegisterPage.elements.inputPass().type(password) : '';
    })

    And('user fill their confirm password field with {string}', (confirm) => {
        confirm ? RegisterPage.elements.inputConfirm().type(confirm) : '';
    }); 

    And('user click register button', () => {
        RegisterPage.elements.buttonRegister().click();
    });

    And('user fill their email field with auto generate data', () => {
        RegisterPage.elements.inputEmail().type(faker.internet.email());
    });

    And('user fill their telp field with auto generate data', () => {
        RegisterPage.elements.inputTelp().type(faker.helpers.fromRegExp('08[0-9]{10}'));
    });

    Then('user get redirected to login page', () => {
        LoginPage.elements.checkRememberMe().should('be.visible');
    });

    Then('system return error field name is required', () => {
        RegisterPage.elements.inputName().then( $input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field email is required', () => {
        RegisterPage.elements.inputEmail().then( $input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field telp is required', () => {
        RegisterPage.elements.inputTelp().then( $input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field password is required', () => {
        RegisterPage.elements.inputPass().then( $input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field confirm password is required', () => {
        RegisterPage.elements.inputConfirm().then( $input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    })

    Then('system return error field email with the email is already taken', () => {
        RegisterPage.elements.errorEmail().should('be.visible');
    });

    Then('system return error field tep with the telp is already been taken', () => {
        RegisterPage.elements.errorTelp().should('be.visible');
    });