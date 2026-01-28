import { AlertTriangle, Shield, TrendingUp, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import type { ApiState, RiskAssessmentResponse } from '@/types/risk';
import { colors, hexColors } from '@/config/colors';

interface RiskAssessmentCardProps {
  apiState: ApiState<RiskAssessmentResponse>;
}

export function RiskAssessmentCard({ apiState }: RiskAssessmentCardProps) {
  // EMPTY STATE - Before any assessment
  if (apiState.status === 'idle') {
    return (
      <Card className="w-full" style={{
        background: `linear-gradient(135deg, ${hexColors.brown.dark}99 0%, ${hexColors.navy.dark}99 100%)`,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <CardHeader>
          <div className="flex items-start gap-3">
            <div 
              className="rounded-full p-3"
              style={{ 
                background: `linear-gradient(135deg, ${hexColors.navy.light}40 0%, ${hexColors.brown.light}40 100%)`,
              }}
            >
              <Info className="size-6 text-white/60" />
            </div>
            <div>
              <CardTitle className="text-white">Risk Assessment</CardTitle>
              <CardDescription className="text-white/60">
                AI-powered risk prediction based on vulnerability context
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Shield className="size-16 text-white/30 mb-4" />
            <p className="text-white/60 text-lg mb-2">No risk assessment available yet</p>
            <p className="text-white/40 text-sm max-w-md">
              Fill in the vulnerability details form and click "Predict Risk Level" to receive an AI-powered risk assessment
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // LOADING STATE - API call in progress
  if (apiState.status === 'loading') {
    return (
      <Card className="w-full" style={{
        background: `linear-gradient(135deg, ${hexColors.brown.dark}99 0%, ${hexColors.navy.dark}99 100%)`,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <CardHeader>
          <div className="flex items-start gap-3">
            <div 
              className="rounded-full p-3 animate-pulse"
              style={{ 
                background: `linear-gradient(135deg, ${hexColors.navy.light}40 0%, ${hexColors.brown.light}40 100%)`,
              }}
            >
              <TrendingUp className="size-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-white">Risk Assessment</CardTitle>
              <CardDescription className="text-white/60">
                Analyzing vulnerability context...
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Loading skeleton */}
          <div className="space-y-4">
            <div className="h-24 rounded-xl bg-white/5 animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 bg-white/5 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-white/5 rounded animate-pulse w-full" />
              <div className="h-4 bg-white/5 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-white/5 rounded animate-pulse w-4/5" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // ERROR STATE - API call failed
  if (apiState.status === 'error') {
    return (
      <Card className="w-full" style={{
        background: `linear-gradient(135deg, ${hexColors.brown.dark}99 0%, ${hexColors.navy.dark}99 100%)`,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <CardHeader>
          <div className="flex items-start gap-3">
            <div 
              className="rounded-full p-3"
              style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
            >
              <AlertTriangle className="size-6 text-red-400" />
            </div>
            <div>
              <CardTitle className="text-white">Risk Assessment Failed</CardTitle>
              <CardDescription className="text-white/60">
                Unable to complete risk analysis
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl p-6 bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 font-medium mb-2">Error</p>
            <p className="text-white/70 text-sm">{apiState.error}</p>
            <p className="text-white/50 text-xs mt-3">
              Please try again or contact support if the issue persists.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // SUCCESS STATE - Display API response
  const { risk_level, risk_score, confidence_drivers } = apiState.data;

  // Map risk level to styling (from backend value)
  const riskConfig = {
    HIGH: {
      ...colors.risk.high,
      label: 'High Risk',
      icon: AlertTriangle,
    },
    MEDIUM: {
      ...colors.risk.medium,
      label: 'Medium Risk',
      icon: Shield,
    },
    LOW: {
      ...colors.risk.low,
      label: 'Low Risk',
      icon: Shield,
    },
  }[risk_level];

  const RiskIcon = riskConfig.icon;

  return (
    <Card className={`w-full ${riskConfig.border}`} style={{
      background: `linear-gradient(135deg, ${hexColors.brown.dark}99 0%, ${hexColors.navy.dark}99 100%)`,
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className={`rounded-full p-3 ${riskConfig.iconBg}`}>
            <RiskIcon className={`size-6 ${riskConfig.iconColor}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Risk Assessment</CardTitle>
              <div className={`px-4 py-1.5 rounded-full border ${riskConfig.badgeBg} ${riskConfig.badgeBorder}`}>
                <span className={`text-sm font-semibold ${riskConfig.badgeText}`}>
                  {riskConfig.label}
                </span>
              </div>
            </div>
            <CardDescription className="text-white/60">
              AI-powered risk prediction based on vulnerability context
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Risk Score Display */}
        <div 
          className={`rounded-xl p-6 ${riskConfig.badgeBg} border ${riskConfig.badgeBorder}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium mb-1 ${riskConfig.badgeText}`}>
                Predicted Risk Score
              </p>
              <p className="text-white/60 text-xs">
                Based on vulnerability context and threat intelligence
              </p>
            </div>
            <div className={`text-4xl font-bold ${riskConfig.badgeText}`}>
              {risk_score}
            </div>
          </div>
        </div>

        {/* Confidence Drivers */}
        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-4">
            CONFIDENCE DRIVERS
          </h3>
          <div className="space-y-3">
            {confidence_drivers.map((driver, index) => (
              <div
                key={index}
                className="flex gap-3 items-start p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className={`${riskConfig.bulletColor} rounded-full size-2 mt-1.5 flex-shrink-0`} />
                <p className="text-white/80 text-sm leading-relaxed">{driver}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
