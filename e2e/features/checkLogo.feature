Feature: Verify Logo

    Check whether the Kavin School logo exist in the loading page
    Scenario: Verify the Kavin School logo exist in the landing page
        Given I'm on the home page url  "http://localhost:4200/"
        When I see "Quiz - Kavin School" text
        Then I should see Kavin School Logo in that page

