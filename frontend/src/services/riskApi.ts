// frontend/src/services/riskApi.ts

import type {
  RiskAssessmentRequest,
  RiskAssessmentResponse
} from '../types/risk';

const API_URL = 'http://localhost:5000/api/risk/predict';

/**
 * Call REAL backend API to assess vulnerability risk
 * Backend is the single source of truth
 */
export async function assessRisk(
  request: RiskAssessmentRequest
): Promise<RiskAssessmentResponse> {

  // Map frontend request → backend expected payload
  const payload = {
    vulnerabilityType: request.vulnerability_type,
    cvssScore: request.cvss_score,
    owaspCategory: request.owasp_category,
    exploitAvailable: request.exploit_available,
    authenticationRequired: request.auth_required,
    internetExposed: request.internet_exposed,
    attackComplexity: request.attack_complexity,
    assetValue: request.asset_value
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Risk API failed with status ${response.status}`);
  }

  const data = await response.json();

  // Map backend response → frontend expected shape
  return {
    risk_score: data.risk_score,
    risk_level: data.risk_level,
    confidence_drivers: data.confidence_drivers
  };
}
