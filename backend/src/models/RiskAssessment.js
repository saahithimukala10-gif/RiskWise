const mongoose = require("mongoose");

const RiskAssessmentSchema = new mongoose.Schema({
  vulnerabilityType: String,
  cvssScore: Number,
  owaspCategory: String,

  exploitAvailable: Boolean,
  authenticationRequired: Boolean,
  internetExposed: Boolean,

  attackComplexity: String,
  assetValue: String,

  riskScore: Number,
  riskLevel: String,

  confidenceDrivers: [String],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("RiskAssessment", RiskAssessmentSchema);
