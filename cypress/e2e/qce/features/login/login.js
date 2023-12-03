import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../../pageobjects/LoginPage';
import NavPage from '../../../../pageobjects/NavPage';

    Given('user open the website', () => {
        cy.visit(Cypress.env('baseUrl'));
    });

    When('user enter my email', () => {
        LoginPage.fillEmail('superadmin@gmail.com');
    });

    And('user enter my password', () => {
        LoginPage.fillPass('password');
    });

    And('user click login button', () => {
        LoginPage.clickButtonLogin();
    });

    Then('user already inside the dashboard page', () => {
        NavPage.getNavDetails().should('be.visible');
    })

// describe('As a tester i want to test this login page', () => {

//     beforeEach(() => {
//         cy.visit(Cypress.env('baseUrl'));
//     });

//     it('Login with valid data', () => {
//         LoginPage.fillEmail('superadmin@gmail.com');

//         LoginPage.fillPass('password');

//         LoginPage.clickButtonLogin();
//     });

//     it('Login with invalid email', () => {
//         LoginPage.fillEmail('member@gmail.com');

//         LoginPage.fillPass('password');

//         LoginPage.clickButtonLogin();

//         LoginPage.getTextError().should('be.visible')
//     });

//     it('Login with invalid password', () => {
//         LoginPage.fillEmail('superadmin@gmail.com');

//         LoginPage.fillPass('password1');

//         LoginPage.clickButtonLogin();

//         LoginPage.getTextError().should('be.visible')
//     });

//     it('Login with invalid email and password', () => {
//         LoginPage.fillEmail('superadmin@gmail.co.id');

//         LoginPage.fillPass('passwordd');

//         LoginPage.clickButtonLogin();

//         LoginPage.getTextError().should('be.visible')
//     });
// });