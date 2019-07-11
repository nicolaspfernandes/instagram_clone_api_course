const collectionName = 'items'

module.exports = {
  saveItem: function (database, data) {
    const collection = database.collection(collectionName)

    return collection.insertOne(data)
  },

  updateItem: function (database, where, data) {
    const collection = database.collection(collectionName)

    return collection.updateOne(where, data)
  },

  deleteItem: function (database, where) {
    const collection = database.collection(collectionName)

    return collection.removeOne(where)
  },

  searchItems: function (database, where) {
    const collection = database.collection(collectionName)

    return collection.find(where)
  }
}
