const express = require("express");
const router = express.Router();
const { predictRiskLevel } = require("../controllers/risk.controller");

router.post("/predict", predictRiskLevel);

module.exports = router;
