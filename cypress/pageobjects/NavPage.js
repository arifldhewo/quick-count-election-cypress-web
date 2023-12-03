class NavPage{
    static elements = {
        navDashboard : () => cy.get('#dashboard'),
        navDetails : () => cy.get('#details'),
        dropProfile : () => cy.get('.px-3'),
        liProfile   : () => cy.get(`.rounded-md > [href="${Cypress.env('baseUrl')}/profile"]`),
        liLogout    : () => cy.get('.rounded-md > form > .block'),
        burgerMenu  : () => cy.get('.shrink-0 > .fa'),
        dropMaster  : () => cy.get('button.flex'),
        dropCamat   : () => cy.get(`#dropdown-example > [href="${Cypress.env('baseUrl')}/admin/master-kecamatan"]`),
        dropLurah   : () => cy.get(`#dropdown-example > [href="${Cypress.env('baseUrl')}/admin/master-kelurahan"]`),
        dropPartai  : () => cy.get(`#dropdown-example > [href="${Cypress.env('baseUrl')}/admin/master-partai"]`),
        dropCaleg   : () => cy.get(`#dropdown-example > [href="${Cypress.env('baseUrl')}/admin/master-caleg"]`),
        dropUser    : () => cy.get(`#dropdown-example > [href="${Cypress.env('baseUrl')}/admin/master-user"]`),
        closeBurger : () => cy.get('#drawer-navigation > .text-gray-400'),
    }

    static clickNavDashboard() {
        return this.elements.navDashboard().click();
    }

    static clickNavDetails() {
        return this.elements.navDetails().click();
    }

    static clickDropProfile() {
        return this.elements.dropProfile().click();
    }

    static clickItemProfile() {
        return this.elements.liProfile().click();
    }

    static clickItemLogout() {
        return this.elements.liLogout().click();
    }

    static clickBurgerMenu() {
        return this.elements.burgerMenu().click();
    }

    static clickDropMasterMenu() {
        return this.elements.dropMaster().click();
    }

    static clickMasterCamat() {
        return this.elements.dropCamat().click();
    }

    static clickMasterLurah() {
        return this.elements.dropLurah().click();
    }

    static clickMasterPartai() {
        return this.elements.dropPartai().click();
    }

    static clickMasterCaleg() {
        return this.elements.dropCaleg().click();
    }

    static clickMasterUser() {
        return this.elements.dropUser().click();
    }

    static clickCloseBurger() {
        return this.elements.closeBurger().click();
    }
}

export default NavPage;