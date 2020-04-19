import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

const GooglePage = require('../../../support/google_object/google_page_object')

const obj = new GooglePage()

Given(`I go to the google page`, () => {
  cy.visit(Cypress.env('GOOGLE_URL'))
})

Then(`I see {string} in the title`, title => {
  cy.title().should('include', title)
})

When(`I fill in search field using {string}`, keyword => {
  cy.get(obj.searchField).type(keyword).type('{enter}')
})

And(`I click the button search`, () => {
  cy.get(obj.searchButton).click()
})

Then(`I see the results {string}`, results => {
  cy.get(obj.searchMain).should(element => {
    expect(element.text()).to.contain(results)
  })
})