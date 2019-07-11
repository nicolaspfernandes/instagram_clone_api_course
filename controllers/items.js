const router = require('express').Router()
const itemsService = require('../services/items')
const databaseService = require('../services/database')

// Promise-based version
router.post('/', function(request, response) {
  databaseService.connect().then(function(database) {
    itemsService
      .saveItem(database, request.body)
      .then(function (error, item) {
        if (error !== null) {
          return response.status(400).json(error)
        }

        return response.status(200).json(item)
      })
  }).catch(function (error) {
    response.status(500).json(error)
  })
})

// Async/await-based version
// router.post('/', async function(request, response) {
//   try {
//     const database = await databaseService.connect()
//     const item = await itemsService.saveItem(database, request.body)

//     return response.status(200).json(item)
//   } catch (error) {
//     response.status(500).json(error)
//   }
// })

module.exports = router
