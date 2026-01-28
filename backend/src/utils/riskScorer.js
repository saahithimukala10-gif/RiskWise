exports.calculateRisk = (input) => {
  let score = Math.round(input.cvssScore * 10);
  const drivers = [];

  if (input.cvssScore >= 9) {
    drivers.push("CVSS score exceeds critical threshold (9.0+)");
    score += 10;
  }

  if (input.exploitAvailable) {
    drivers.push("Public exploit available");
    score += 15;
  }

  if (input.internetExposed && !input.authenticationRequired) {
    drivers.push("Internet exposed with no authentication");
    score += 20;
  }

  if (input.attackComplexity === "low") {
    drivers.push("Low attack complexity");
    score += 10;
  }

  if (input.assetValue === "critical") {
    drivers.push("Asset classified as business-critical");
    score += 15;
  }

  let level = "LOW";
  if (score >= 50) level = "MEDIUM";
  if (score >= 80) level = "HIGH";

  return {
    score: Math.min(score, 100),
    level,
    drivers
  };
};
