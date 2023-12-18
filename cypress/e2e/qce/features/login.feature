@Login
Feature: Login

    As a user i want to login to this page

        @Negative
        Scenario: Login with email is empty
            Given user open the website
            When user enter my email with ""
            And user enter my password with "password"
            And user click login button
            Then system return error message in field email

        @Negative
        Scenario: Login with password is empty
            Given user open the website
            When user enter my email with "superadmin@gmail.com"
            And user enter my password with ""
            And user click login button
            Then system return error message in field password

        @Negative
        Scenario: Login with email doesn't exists
            Given user open the website
            When user enter my email with "superadmin@gmail.co.id"
            And user enter my password with "password"
            And user click login button
            Then system return error message

        @Negative
        Scenario: Login with password doesn't match with email
            Given user open the website
            When user enter my email with "superadmin@gmail.com"
            And user enter my password with "password1"
            And user click login button
            Then system return error message

        @Negative
        Scenario: Login with email and password aren't exists
            Given user open the website
            When user enter my email with "superadmin@gmail.co.id"
            And user enter my password with "password1"
            And user click login button
            Then system return error message

        @Positive
        Scenario: Login with valid data
            Given user open the website
            When user enter my email with "superadmin@gmail.com"
            And user enter my password with "password"
            And user click login button
            Then user already inside the dashboard page