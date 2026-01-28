import { Shield, Target, Users, Award, CheckCircle, TrendingUp, Clock, Lock } from 'lucide-react';
import { hexColors } from '@/config/colors';

export function AboutPage() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'AI-assisted vulnerability analysis and contextual risk prioritization to reduce alert fatigue.'
    },
    {
      icon: Target,
      title: 'Precision Analysis',
      description: 'Explainable risk scoring with transparent confidence drivers for every assessment.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Designed for security teams to triage, analyze, and reason about risk together.'
    },
    {
      icon: Award,
      title: 'Industry-Aligned Design',
      description: 'Built following modern security platform patterns used across enterprise environments.'
    }
  ];

  const capabilities = [
    { icon: CheckCircle, text: 'Comprehensive vulnerability scanning logic' },
    { icon: CheckCircle, text: 'AI-driven risk prioritization' },
    { icon: CheckCircle, text: 'Real-time risk context evaluation' },
    { icon: CheckCircle, text: 'Compliance-aligned reporting architecture' },
    { icon: CheckCircle, text: 'Enterprise-grade security design' },
    { icon: CheckCircle, text: 'Continuous monitoring & alerting workflows' },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#0F1419] via-[#1A202C] to-[#2C1810]">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(${hexColors.navy.light}22 1px, transparent 1px), linear-gradient(90deg, ${hexColors.navy.light}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div 
          className="rounded-3xl p-12 mb-16 backdrop-blur-lg"
          style={{
            background: `linear-gradient(135deg, ${hexColors.navy.dark}CC 0%, ${hexColors.brown.dark}CC 100%)`,
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              About RiskWise
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              RiskWise is an AI-powered security platform designed to help organizations analyze, prioritize, and 
              understand vulnerability risk using contextual and explainable intelligence.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Rather than relying solely on raw severity scores, RiskWise evaluates vulnerabilities in real-world 
              context — including exploit availability, exposure, asset criticality, and attack complexity — to 
              surface what truly matters first.
            </p>
            <p className="text-base text-white/60 italic">
              RiskWise is built as a research and portfolio project demonstrating how modern security products 
              combine AI, risk modeling, and enterprise-grade design.
            </p>
          </div>
        </div>

        {/* Platform Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="rounded-2xl p-8 backdrop-blur-md text-center"
              style={{
                background: `linear-gradient(135deg, ${hexColors.brown.dark}99 0%, ${hexColors.navy.dark}99 100%)`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-lg font-semibold text-white mb-2">Vulnerabilities Analyzed</div>
              <div className="text-sm text-white/60">
                RiskWise is architected to process and evaluate large volumes of vulnerability data for prioritization.
              </div>
            </div>
            <div 
              className="rounded-2xl p-8 backdrop-blur-md text-center"
              style={{
                background: `linear-gradient(135deg, ${hexColors.brown.dark}99 0%, ${hexColors.navy.dark}99 100%)`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-lg font-semibold text-white mb-2">Assets Evaluated</div>
              <div className="text-sm text-white/60">
                Designed to support risk analysis across diverse asset types and environments.
              </div>
            </div>
            <div 
              className="rounded-2xl p-8 backdrop-blur-md text-center"
              style={{
                background: `linear-gradient(135deg, ${hexColors.brown.dark}99 0%, ${hexColors.navy.dark}99 100%)`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-lg font-semibold text-white mb-2">Platform Reliability</div>
              <div className="text-sm text-white/60">
                Built with high-availability principles and production-ready architecture in mind.
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose RiskWise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose RiskWise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${hexColors.brown.dark}99 0%, ${hexColors.navy.dark}99 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div 
                    className="rounded-full p-4 inline-block mb-4"
                    style={{ 
                      background: `linear-gradient(135deg, ${hexColors.navy.light}40 0%, ${hexColors.brown.light}40 100%)`,
                    }}
                  >
                    <Icon className="size-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What RiskWise Offers */}
        <div 
          className="rounded-3xl p-12 backdrop-blur-lg mb-16"
          style={{
            background: `linear-gradient(135deg, ${hexColors.navy.dark}CC 0%, ${hexColors.brown.dark}CC 100%)`,
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What RiskWise Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:bg-white/5"
                >
                  <Icon className="size-5 text-white flex-shrink-0" />
                  <span className="text-white/80">{capability.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust & Performance */}
        <div 
          className="rounded-3xl p-12 backdrop-blur-lg mb-8"
          style={{
            background: `linear-gradient(135deg, ${hexColors.navy.dark}CC 0%, ${hexColors.brown.dark}CC 100%)`,
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Trust &amp; Performance <span className="text-white/60 text-xl">(Design Benchmarks)</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="size-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-sm font-semibold text-white/80 mb-2">Risk Reduction (Target Outcome)</div>
              <div className="text-xs text-white/60">By prioritizing exploitable, high-impact vulnerabilities</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Clock className="size-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">&lt;5 min</div>
              <div className="text-sm font-semibold text-white/80 mb-2">Risk Assessment Turnaround</div>
              <div className="text-xs text-white/60">Designed for rapid decision-making</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Lock className="size-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">SOC 2</div>
              <div className="text-sm font-semibold text-white/80 mb-2">Aligned Architecture</div>
              <div className="text-xs text-white/60">Built with security, auditing, and compliance principles</div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-sm text-white/50 italic">
            RiskWise is a research and portfolio project demonstrating enterprise-grade security architecture 
            and AI-driven vulnerability risk analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
