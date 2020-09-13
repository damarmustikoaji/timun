@googleTest
Feature: Google - Search

              I want to search an article on Google
        Background: Go to Google page
            Given I go to the google page
             Then I see "Google" in the title
  
        @positiveTesting
        Scenario: As a User, I should be able to successfully search on google page
             When I fill in search field using "damar mustiko aji github"
             Then I see the results "Damar Mustiko Aji"