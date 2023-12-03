describe('As a tester i want to test this register page', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
    });

    it('Register page with valid data', () => {
        cy.contains('Belum punya akun? Daftar').click();

        cy.contains('Name').type('Audi');

        cy.contains('Email').type('audi@qceapp.com');

        cy.contains('Telp').type('0812123123');

        cy.contains('Password').type('password');

        cy.contains('Confirm Password').type('password');

        cy.get('button').click();

        cy.contains('Email').should('be.visible');
    });

    it('Register page with email already exists', () => {
        cy.contains('Belum punya akun? Daftar').click();

        cy.contains('Name').type('Audi');

        cy.contains('Email').type('audi@qceapp.com');

        cy.contains('Telp').type('0812123124');

        cy.contains('Password').type('password');

        cy.contains('Confirm Password').type('password');

        cy.get('button').click();

        cy.contains('The email has already been taken.').should('be.visible');
    });

    it('Register page with telp already exists', () => {
        cy.contains('Belum punya akun? Daftar').click();

        cy.contains('Name').type('Audi');

        cy.contains('Email').type('audi@qceapp.co.id');

        cy.contains('Telp').type('0812123123');

        cy.contains('Password').type('password');

        cy.contains('Confirm Password').type('password');

        cy.get('button').click();

        cy.contains('The telp has already been taken.').should('be.visible');
    });

    it('Register page with email and telp already exists', () => {
        cy.contains('Belum punya akun? Daftar').click();

        cy.contains('Name').type('Audi');

        cy.contains('Email').type('audi@qceapp.com');

        cy.contains('Telp').type('0812123123');

        cy.contains('Password').type('password');

        cy.contains('Confirm Password').type('password');

        cy.get('button').click();

        cy.contains('Email').should('be.visible');
    });
});