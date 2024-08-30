const express = require('express')
const router = express.Router()
const mouseController = require('../controllers/mouseController')

router.get('/move-mouse', mouseController.moveMouse)
router.get('/click-mouse', mouseController.clickMouse)

module.exports = router
