Feature: AddDataLengkapAdmin

    As an admin i want to add detail data from each tps

    Background: Admin already login and admin already on add data lengkap page
        Given user open the website
        When user enter my email with "superadmin@gmail.com"
        And user enter my password with "password"
        And user click login button
        When user click to details button in navbar
        And user click add button on details page


    Scenario: Admin adding all field with valid data
        When user filling details data with "dataLengkap"
        Then user get success message contains Your data has been added successfully!