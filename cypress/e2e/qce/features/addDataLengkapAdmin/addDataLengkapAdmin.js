import {When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import NavPage from '../../../../pageobjects/NavPage';
import DetailPage from '../../../../pageobjects/DetailPage';
import AddDataLengkapPage from '../../../../pageobjects/AddDataLengkapPage';
import { faker } from '@faker-js/faker';

When('user click to details button in navbar', () => {
    NavPage.elements.navDetails().click()
});

And('user click add button on details page', () => {
    DetailPage.elements.addButton().click();
});

When('user filling details data with {string}', (file) => {
    cy.fixture(file).then(dataLengkap => {
        AddDataLengkapPage.elements.selectKecamatan().select(dataLengkap.kecamatan);

        AddDataLengkapPage.elements.selectKelurahan().select(dataLengkap.kelurahan);

        AddDataLengkapPage.elements.selectPartai().select(dataLengkap.partai);
    });

    AddDataLengkapPage.elements.inputRW().type(faker.string.numeric(3));

    AddDataLengkapPage.elements.inputRT().type(faker.string.numeric(3));

    AddDataLengkapPage.elements.inputTPS().type(faker.string.numeric(2));

    AddDataLengkapPage.elements.inputTotalDPT().type(faker.string.numeric(3))

    AddDataLengkapPage.elements.inputTotalSSS().type(faker.string.numeric(3))

    AddDataLengkapPage.elements.inputTotalSSTS().type(faker.string.numeric(3))

    AddDataLengkapPage.elements.inputTotalSSR().type(faker.string.numeric(3))

    AddDataLengkapPage.elements.inputTotalPH().type(faker.string.numeric(3))

    AddDataLengkapPage.elements.inputTotalPTH().type(faker.string.numeric(3))

    AddDataLengkapPage.elements.inputSuara1().type(faker.string.numeric(1))

    AddDataLengkapPage.elements.inputSuara2().type(faker.string.numeric(1))

    AddDataLengkapPage.elements.inputSuara3().type(faker.string.numeric(1))

    AddDataLengkapPage.elements.inputSuara4().type(faker.string.numeric(1))

    AddDataLengkapPage.elements.inputSuara5().type(faker.string.numeric(1))

    AddDataLengkapPage.elements.inputSuara6().type(faker.string.numeric(1))

    AddDataLengkapPage.elements.inputSuara7().type(faker.string.numeric(1))

    AddDataLengkapPage.elements.inputSuara8().type(faker.string.numeric(1))

    AddDataLengkapPage.elements.inputSuara9().type(faker.string.numeric(1))

    AddDataLengkapPage.elements.inputSuara10().type(faker.string.numeric(1))

    cy.fixture("discord.png", null).as('image')

    AddDataLengkapPage.elements.inputImage().selectFile("@image")

    AddDataLengkapPage.elements.checkAgreement().check();

    AddDataLengkapPage.elements.buttonSubmit().click();
});

Then('user get success message contains Your data has been added successfully!', () => {
    DetailPage.elements.alertSuccess().should('be.visible');
});