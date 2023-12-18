import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../../pageobjects/LoginPage';
import NavPage from '../../../../pageobjects/NavPage';
import DetailPage from '../../../../pageobjects/DetailPage';

    Given('user open the website', () => {
        cy.visit(Cypress.env('baseUrl'));
    });

    When('user enter my email with {string}', (email) => {
        email ? LoginPage.elements.inputEmail().type(email) : '';
    });

    And('user enter my password with {string}', (pass) => {
        pass ? LoginPage.elements.inputPass().type(pass) : '';
    });

    And('user click checkbox remember me', () => {
        LoginPage.elements.checkRememberMe().click();
    });

    And('user click login button', () => {
        LoginPage.elements.buttonLogin().click();
    });

    Then('user already inside the dashboard page', () => {
        NavPage.elements.navDetails().should('be.visible');
    });

    Then('system return error message', () => {
        LoginPage.elements.textError().should('be.visible');
    });

    Then('system return error message in field email', () => {
        LoginPage.elements.inputEmail().then($input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        });
    });

    Then('system return error message in field password', () => {
        LoginPage.elements.inputPass().then($input => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.');
        })
    })