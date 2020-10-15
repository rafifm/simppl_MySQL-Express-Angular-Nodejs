const express = require("express");

const controllerDsn = require("../controllers/dosen/akundosen");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const router = express.Router();

router.post("",  extractFile, controllerDsn.create);

router.put("/:id",  extractFile, controllerDsn.update);

router.get("", controllerDsn.findAll);

router.get("/:idDsn/:idMhs", controllerDsn.insertMhs);

router.get("/:id", controllerDsn.findOne);

router.delete("/:id",  controllerDsn.delete);

module.exports = router;