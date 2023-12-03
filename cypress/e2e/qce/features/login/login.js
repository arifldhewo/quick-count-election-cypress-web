import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../../pageobjects/LoginPage';
import NavPage from '../../../../pageobjects/NavPage';

    Given('user open the website', () => {
        cy.visit(Cypress.env('baseUrl'));
    });

    When('user enter my email with {string}', (email) => {
        LoginPage.fillEmail(email);
    });

    And('user enter my password with {string}', (pass) => {
        LoginPage.fillPass(pass);
    });

    And('user click login button', () => {
        LoginPage.clickButtonLogin();
    });

    Then('user already inside the dashboard page', () => {
        NavPage.getNavDetails().should('be.visible');
    })

    Then ('system return error message', () => {
        LoginPage.getTextError().should('be.visible');
    });