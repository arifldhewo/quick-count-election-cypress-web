require('cypress-xpath');

class AddDataLengkapPage{
    static elements = {
        selectKecamatan : () => cy.get('#kecamatan_id'),
        selectKelurahan : () => cy.get('#kelurahan_id'),
        inputRW         : () => cy.get('#rw'),
        inputRT         : () => cy.get('#rt'),
        inputTPS        : () => cy.get('#no_tps'),
        inputTotalDPT   : () => cy.get('#total_dpt'),
        inputTotalSSS   : () => cy.get('#total_sss'),
        inputTotalSSTS  : () => cy.get('#total_ssts'),
        inputTotalSSR   : () => cy.get('#total_ssr'),
        inputTotalPH    : () => cy.get('#pemilih_hadir'),
        inputTotalPTH   : () => cy.get('#pemilih_tidak_hadir'),
        selectPartai    : () => cy.get('#partai_id'),
        inputImage      : () => cy.get('#image'),
        checkAgreement  : () => cy.get('#agree'),
        buttonSubmit    : () => cy.get('#submit'),
        inputSuara1     : () => cy.get('[placeholder="Perolehan Suara Yanuar Prabowo"]'),
        inputSuara2     : () => cy.get('[placeholder="Perolehan Suara Simon A.M Sitorus"]'),
        inputSuara3     : () => cy.get('[placeholder="Perolehan Suara Mirza Riadiani K (Chica Koeswoyo)"]'),
        inputSuara4     : () => cy.get('[placeholder="Perolehan Suara M. Rayhan Ali"]'),
        inputSuara5     : () => cy.get('[placeholder="Perolehan Suara Satrio S. Herlambang"]'),
        inputSuara6     : () => cy.get('[placeholder="Perolehan Suara Ines Yuana"]'),
        inputSuara7     : () => cy.get('[placeholder="Perolehan Suara Ashari"]'),
        inputSuara8     : () => cy.get('[placeholder="Perolehan Suara Faisal Najemuddin Afdhal"]'),
        inputSuara9     : () => cy.get('[placeholder="Perolehan Suara Pratama Meidi"]'),
        inputSuara10    : () => cy.get('[placeholder="Perolehan Suara Niken Indah Kristianti SE"]')
    }
}

export default AddDataLengkapPage;