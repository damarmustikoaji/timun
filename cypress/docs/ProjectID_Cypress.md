### [Back](../)

### How to use seed data

Seed data disini adalah untuk handle data sebelum atau sesudah automation testing. Seperti menyiapkan data yang akan di eksekusi oleh automation testing di sebelum testing berjalan. Serta mengkondisikan data dengan cara menghapus (cleaning) data tersebut dari database setelah proses testing dijalankan.

### Prerequisites:
1. Membutuhkan module `mysql`
2. Function connect database, execution, dan close connection di dalam `plugins/index.js`

```javascript
const mysql = require('mysql')

const connectionParams = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
}

function queryTestDb(query) {
  const connection = mysql.createConnection(connectionParams)
  connection.connect()
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = (on, config) => {
  on('task', {
    queryDb: query => {
      return queryTestDb(query, config)
    },
  })
}

```

3. Membuat steps query sql `integration/common/steps.js`

```javascript
const { UPDATE_USERS } = require('../../../seed_data/users_query')

Given(`I query SQL database to updating the data on the table users`, () => {
  cy.task('queryDb', UPDATE_USERS)
})
```

4. Membuat query (optional), bisa juga ditaruh didalam step tanpa memisahkan file. Contoh `seed_data/users_query.js`

```javascript
module.exports = {
  UPDATE_USERS: `UPDATE users SET name='Alfred Schmidt' WHERE user_id=501;`,
}

```