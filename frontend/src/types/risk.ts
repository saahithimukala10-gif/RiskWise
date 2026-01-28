// API Types for Risk Assessment

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface RiskAssessmentRequest {
  cvss_score: number;
  vulnerability_type: string;
  owasp_category: string;
  exploit_available: boolean;
  auth_required: boolean;
  internet_exposed: boolean;
  attack_complexity: 'low' | 'high';
  asset_value: 'low' | 'medium' | 'critical';
}

export interface RiskAssessmentResponse {
  risk_level: RiskLevel;
  risk_score: number;
  confidence_drivers: string[];
}

export type ApiState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };
