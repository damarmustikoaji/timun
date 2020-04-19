// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config()
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
  on('file:preprocessor', cucumber())
  on('task', {
    queryDb: query => {
      return queryTestDb(query, config)
    },
  })

  config.env = config.env || {}
  config.env.GOOGLE_URL = process.env.GOOGLE_URL
  config.env.RALALI_WEB_URL = process.env.RALALI_WEB_URL
  return config
}
