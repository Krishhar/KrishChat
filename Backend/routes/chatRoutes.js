const express = require("express")
const { protect } = require('../middleWare/authMiddleware')
const { accessController, fetchChats, createGroupChats, renameGroup, addToGroup, removeFromGroup, } = require('../controllers/chatController')

const router = express.Router()

router.route('/').post(protect, accessController)
router.route('/').get(fetchChats)
router.route('/group').post(protect, createGroupChats)
router.route('/rename').put(renameGroup)
router.route('/remove').put(removeFromGroup)
router.route('/add').put(addToGroup)


module.exports = router