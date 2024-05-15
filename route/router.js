const express = require('express');
const router = express();
const controller = require('../controller/DataController')



router.route("/addData").post(controller.AddData);
router.route("/getData").get(controller.Datatake);



module.exports = router;