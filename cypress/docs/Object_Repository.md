### [Back](../)

## Object Repository

Manajemen object diperlukan jika dalam step menggunakan banyak variable komponen / element / locator. Membuat file testing menjadi lebih rapi, dan reusable.

1. Go to `cypress/support/` (optional directory)
2. Buat directory `google_object`
3. Buat file `google_page_object`
4. Buat scripts

```javascript
class GooglePage {
  constructor() {
    this.searchField = 'input[name="q"]'
    this.searchButton = 'input[type="submit"]'
    this.searchContent = 'div[id="search"]'
    this.searchMain = 'div[id="main"]'
  }
}

module.exports = GooglePage
```

5. Cara menggunakan, go to file steps.js
6. Import dan memanggil object

```javascript

import { When } from 'cypress-cucumber-preprocessor/steps'

const GooglePage = require('../../../support/google_object/google_page_object')

const obj = new GooglePage()

When(`I fill in search field using {string}`, keyword => {
  cy.get(obj.searchField).type(keyword).type('{enter}')
})
```