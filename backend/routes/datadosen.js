const express = require("express");

const controllerDsn = require("../controllers/datadosen");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const router = express.Router();

router.post("",  extractFile, controllerDsn.tambahdosen);

router.put("/:id",  extractFile, controllerDsn.editdosen);

router.get("", controllerDsn.tambahdosen);

router.get("/:id", controllerDsn.tampildsnid);

router.delete("/:id",  controllerDsn.hapusdsn);

module.exports = router;