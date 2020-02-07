const express = require("express");

const dftrController = require("../controllers/pendaftaranmhs");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();



router.post("", checkAuth, extractFile, dftrController.tambahmhs);

router.put("/:id", checkAuth, extractFile, dftrController.editmhs);

router.get("", dftrController.tampilmhs);

router.get("/:id", dftrController.tampilmhsid);

router.delete("/:id", checkAuth, dftrController.hapusmhs);

module.exports = router;
