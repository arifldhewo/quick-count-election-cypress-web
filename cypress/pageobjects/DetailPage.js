require('cypress-xpath');

class DetailPage{
    static elements = {
        addButton       : () => cy.xpath('//*[@id="content"]/header/div/div/div/a[1]'),
        downloadButton  : () => cy.xpath('//*[@id="content"]/header/div/div/div/a[2]'),
        searchBar       : () => cy.get('label > input'),
        showItem        : () => cy.get('select'),
        previousPage    : () => cy.get('#detailTable_previous'),
        nextPage        : () => cy.get('#detailTable_next'),
        alertSuccess    : () => cy.contains('Your data has been added successfully!'),
        buttonCloseAlert: () => cy.get('.ml-auto > .w-5 > path'),
        firstItem       : () => cy.xpath('//*[@id="detailTable"]/tbody/tr[1]/td[1]'),
        editFirstItem   : () => cy.xpath('//*[@id="detailTable"]/tbody/tr[2]/td/ul/li[26]/span[2]/a')
    }
}

export default DetailPage;