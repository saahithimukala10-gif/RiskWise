const RiskAssessment = require("../models/RiskAssessment");
const { calculateRisk } = require("../utils/riskScorer");

exports.predictRisk = async (data) => {
  const { score, level, drivers } = calculateRisk(data);

  const assessment = new RiskAssessment({
    ...data,
    riskScore: score,
    riskLevel: level,
    confidenceDrivers: drivers
  });

  await assessment.save();
  return assessment;
};
