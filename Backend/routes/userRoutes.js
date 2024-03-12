const express = require("express")
const {RegUser, authUser, allUsers} = require('../controllers/userController')
const {protect} = require('../middleWare/authMiddleware')

const router = express.Router()

router.route('/').post(RegUser).get(protect, allUsers)
router.post('/login',authUser)

module.exports = router