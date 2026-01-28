const { predictRisk } = require("../services/risk.service");

exports.predictRiskLevel = async (req, res) => {
  try {
    const result = await predictRisk(req.body);
    res.status(201).json({
      risk_score: result.riskScore,
      risk_level: result.riskLevel,
      confidence_drivers: result.confidenceDrivers
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Risk prediction failed" });
  }
};
