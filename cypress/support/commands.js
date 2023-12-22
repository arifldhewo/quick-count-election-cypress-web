// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('loadCSV', (dataLengkap) => {
    let row = dataLengkap.split('\r\n'); //spliting the data into a row of array
    let header = row[0].split(','); //get the header item
    let resultArr = [];
    let reallyResult = [];

    //split the value from string to 2D array
    for(let i = 0; i < row.length; i++){
        resultArr[i] = row[i].split(',');
    }

    resultArr.shift(); //deleting the header row

    //change the form from array 2D to arrays of objects
    for(let i = 0; i < resultArr.length; i++){
        let resultObj = {};
        for(let j = 0; j < resultArr.length; j++){
            resultObj[header[j]] = resultArr[i][j];
        }
        reallyResult.push(resultObj);
    }

    return reallyResult;
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })