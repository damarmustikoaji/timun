#  Boilerplate WEBUI Automation Testing

<img src="docs/img/cypress_cucumber_logo.png" width="500"/>

> Cypress is a next generation front end testing tool built for the modern web. https://www.cypress.io/

> Cucumber is a software tool used by computer programmers that supports behavior-driven development (BDD). Central to the Cucumber BDD approach is its plain language parser called Gherkin. https://cucumber.io/

## How to Run:

- use `test-webui` to upload the report on cypress dashboard
- use `cypress` for local testing (not uploading the report)

```sh
$ npm run cypress -- -e TAGS=''
$ npm run cypress -- -e TAGS='not @skip'
$ npm run cypress -- -e TAGS='@tagNameScenario'
$ npm run cypress -- -e TAGS='' --browser chrome
```

e.g
```sh
$ npm run cypress -- -e TAGS='@ralaliSearchTest'
```

if you want launch the browser
```sh
$ npm run cypress -- -e TAGS='@ralaliSearchTest' --browser chrome
```

## [How to write](docs/)

## [How to generate Report](docs/Report.md)

## [How to add Env](docs/Env.md)

## [How to use Cypress Desktop](docs/Cypress_Desktop.md)

## [How to use Seed Data](docs/Seed_Data.md)

## [How to Setup Project ID Cypress](docs/ProjectID_Cypress.md)

## [How to manage Object Repository](docs/Object_Repository.md)
