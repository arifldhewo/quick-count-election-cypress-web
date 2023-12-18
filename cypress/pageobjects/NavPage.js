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
}

export default NavPage;