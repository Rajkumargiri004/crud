const express = require('express');
const UserController = require('../controller/user.controller');

const router = express.Router();

router.route('/input').post(UserController.createUser)
router.route('/output').get(UserController.userList);
router.route('/detail/:id').get(UserController.userInfo);
module.exports = router;
