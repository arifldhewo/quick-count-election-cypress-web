@Register
Feature: Register

    As a user i want to register new account

    Background: Open Website
        Given user open the website
        When user click register link

        @Negative
        Scenario: Register with name field is empty
            And user fill their name field with ""
            And user fill their email field with "audi@qceapp.com"
            And user fill their mobile field number with "081111111111"
            When user fill their password field with "password"
            And user fill their confirm password field with "password"
            And user click register button
            Then system return error field name is required

        @Negative
        Scenario: Register with email field is empty
            And user fill their name field with "Audi"
            And user fill their email field with ""
            And user fill their mobile field number with "081111111111"
            When user fill their password field with "password"
            And user fill their confirm password field with "password"
            And user click register button
            Then system return error field email is required

        @Negative
        Scenario: Register with telp field is empty
            And user fill their name field with "Audi"
            And user fill their email field with "audi@qceapp.com"
            And user fill their mobile field number with ""
            When user fill their password field with "password"
            And user fill their confirm password field with "password"
            And user click register button
            Then system return error field telp is required
        
        @Negative
        Scenario: Register with password field is empty
            And user fill their name field with "Audi"
            And user fill their email field with "audi@qceapp.com"
            And user fill their mobile field number with "081111111111"
            When user fill their password field with ""
            And user fill their confirm password field with "password"
            And user click register button
            Then system return error field password is required
        
        @Negative
        Scenario: Register with confirm password field is empty
            And user fill their name field with "Audi"
            And user fill their email field with "audi@qceapp.com"
            And user fill their mobile field number with "081111111111"
            When user fill their password field with "password"
            And user fill their confirm password field with ""
            And user click register button
            Then system return error field confirm password is required

        @Negative
        Scenario: Register with email and mobile phone already exists
            And user fill their name field with "Audi"
            And user fill their email field with "superadmin@gmail.com"
            And user fill their mobile field number with "081111111111"
            When user fill their password field with "password"
            And user fill their confirm password field with "password"
            And user click register button
            Then system return error field email with the email is already taken
            And system return error field tep with the telp is already been taken

        @Positive
        Scenario: Register with valid data
            And user fill their name field with "Audi"
            And user fill their email field with auto generate data
            And user fill their telp field with auto generate data
            When user fill their password field with "password"
            And user fill their confirm password field with "password"
            And user click register button
            Then user get redirected to login page