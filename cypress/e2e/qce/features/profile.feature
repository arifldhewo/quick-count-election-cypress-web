@Profile
Feature: Profile

    As a user i want to do something in this profile page

    Background: Already login and already inside profile page
        Given user open the website
        When user enter my email with "superadmin@gmail.com"
        And user enter my password with "password"
        And user click login button
        When user click drop profile in navigation bar
        And user click drop item with name of profile

        @Positive
        Scenario: Changing account name and email with valid data
            When user rewrite the name with "Superadmin"
            And user rewrite the email with "superadmin@gmail.com"
            And user click button save profile
            Then user get return message with value Saved

        @Negative
        Scenario: Changing account with empty name
            When user rewrite the name with ""
            And user rewrite the email with "superadmin@gmail.com"
            And user click button save profile
            Then user get return error field name is required

        @Negative
        Scenario: Changing account with empty email
            When user rewrite the name with "Superadmin"
            And user rewrite the email with ""
            And user click button save profile
            Then user get return error field email is required

        @Negative
        Scenario: Changing account with email symbol is missing
            When user rewrite the name with "superadmin"
            And user rewrite the email with "superadmingmail.com"
            And user click button save profile
            Then user get return error field email is missing an @ symbol

        @Negative
        Scenario: Changing account with email value is incomplete
            When user rewrite the name with "superadmin"
            And user rewrite the email with "superadmin@"
            And user click button save profile
            Then user get return error field email value is incomplete