'use strict'

const ObjectId = require('mongodb').ObjectId
const db = require('../db')

const collectionName = 'users'

module.exports = {
  /**
   * Get's a user by it's ID
   * @param {string} id The id of the user
   * @returns {Promise<Object>} The user object
   */
  findById(id) {
    return db
      .getDb()
      .collection(collectionName)
      .findOne({ _id: new ObjectId(id) })
  }
}
