const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/reports/json",
    reportPath: "cypress/reports/html",
    metadata: {
        browser: {
        name: "chrome",
        version: "XX",
        },
        device: "Local test machine",
        platform: {
        name: "Windows 10 Pro",
        version: "20H2",
        },
    },
});