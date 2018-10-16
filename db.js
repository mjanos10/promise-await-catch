'use strict'

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'async-promise-test'

const client = new MongoClient(url)

let db

module.exports = {
  connect() {
    return new Promise((resolve, reject) => {
      client.connect(err => {
        if (err) return reject(err)
        console.log('Connected successfully to server')

        db = client.db(dbName)
        resolve(db)
      })
    })
  },
  getDb() {
    return db
  }
}
