const express = require("express");
const router = express.Router();
const itemController = require("../controller/item");

router.post("/upload", itemController.upload);

module.exports = router;
