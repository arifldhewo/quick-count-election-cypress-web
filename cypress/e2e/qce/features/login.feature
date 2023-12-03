Feature: login

    As a user i want to login to this page

    Scenario: Sucessfull login
        Given user open the website
        When user enter my email
        And user enter my password
        And user click login button
        Then user already inside the dashboard page