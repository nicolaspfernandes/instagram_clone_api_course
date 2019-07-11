const router = require('express').Router()

router.get('/', function(request, response) {
  response.json({msg: 'Olá!'})
})

module.exports = router
