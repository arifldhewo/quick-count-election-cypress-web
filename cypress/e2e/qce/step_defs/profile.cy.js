import LoginPage from '../../../pageobjects/LoginPage';
import NavPage from '../../../pageobjects/NavPage';
import ProfilePage from '../../../pageobjects/ProfilePage';

describe('As a tester i want to test this profile page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));

        LoginPage.fillEmail('superadmin@gmail.com');

        LoginPage.fillPass('password');

        LoginPage.clickButtonLogin();

        NavPage.clickDropProfile();

        NavPage.clickItemProfile();
    });
    
    it('Changing account name', () => {
        ProfilePage.fillName('Superadmin');

        ProfilePage.fillEmail('superadmin@gmail.com');

        ProfilePage.clickButtonSaveProfile();

        ProfilePage.getTextSaved().should('be.visible')
    });
});