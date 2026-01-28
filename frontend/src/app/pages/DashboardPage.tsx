import { useState } from 'react';
import { VulnerabilityDetailsCard } from '@/app/components/VulnerabilityDetailsCard';
import { RiskAssessmentCard } from '@/app/components/RiskAssessmentCard';
import { hexColors } from '@/config/colors';
import { assessRisk } from '@/services/riskApi';
import type { RiskAssessmentRequest, RiskAssessmentResponse, ApiState } from '@/types/risk';

export function DashboardPage() {
  const [apiState, setApiState] = useState<ApiState<RiskAssessmentResponse>>({ status: 'idle' });

  const handleRiskAssessment = async (data: RiskAssessmentRequest) => {
    // Set loading state
    setApiState({ status: 'loading' });

    try {
      // Call backend API - DO NOT compute risk on client
      const response = await assessRisk(data);
      
      // Set success state with API response
      setApiState({ 
        status: 'success', 
        data: response 
      });
    } catch (error) {
      // Set error state
      setApiState({ 
        status: 'error', 
        error: error instanceof Error ? error.message : 'Failed to assess risk' 
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#0F1419] via-[#1A202C] to-[#2C1810]">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(${hexColors.navy.light}22 1px, transparent 1px), linear-gradient(90deg, ${hexColors.navy.light}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Vulnerability Risk Assessment</h1>
            <p className="text-white/60">
              AI-powered risk analysis based on contextual vulnerability intelligence
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <VulnerabilityDetailsCard 
              onSubmit={handleRiskAssessment}
              isLoading={apiState.status === 'loading'}
            />
            <RiskAssessmentCard 
              apiState={apiState}
            />
          </div>

          {/* Enterprise Notice */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm">
              Production System • All risk assessments are computed server-side • Backend API is the single source of truth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
