#  Boilerplate WEBUI Automation Testing

<img src="cypress/docs/img/cypress_cucumber_logo.png" width="500"/>

> Cypress is a next generation front end testing tool built for the modern web. https://www.cypress.io/

> Cucumber is a software tool used by computer programmers that supports behavior-driven development (BDD). Central to the Cucumber BDD approach is its plain language parser called Gherkin. https://cucumber.io/

### Prerequisites:

- node version `^v12.0.0`
- Install Node.js and npm, we will use npm to install or yarn
- Cypress x Cucumber for automation testing

### How to Getting Started:

```sh
$ git clone "url this project"
$ cd [project]
$ npm install
```

### Env

Setup file .env

```sh
GOOGLE_URL=
RALALI_WEB_URL=
```

### Data Test
All data test for automation testing

Go to `cypress/fixtures/`

### How to Run:

- use `test-webui` to upload the report on cypress dashboard
- use `cypress` for local testing (not uploading the report)

```sh
$ npm run cypress -- -e TAGS=''                     | All test
$ npm run cypress -- -e TAGS='not @skip'            | All test without tag @skip
$ npm run cypress -- -e TAGS='@tagNameScenario'     | Only @tagNameScenario
$ npm run cypress -- -e TAGS='' --browser chrome    | Launch the browser
$ npm run cypress-ui                                | Open the Cypress Desktop from node_modules
```

### Report

Cypress Dashboard https://dashboard.cypress.io/projects/7tcyw1/runs

### [Documents](cypress)

### Reference
- https://docs.cypress.io/guides/overview/why-cypress.html
- https://cucumber.io/docs/gherkin/
- https://github.com/cucumber/cucumber-js
