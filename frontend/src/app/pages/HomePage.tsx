import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Radio, Layers, FileText, Lock, ArrowRight } from 'lucide-react';
import { hexColors } from '@/config/colors';

export function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Shield,
      title: 'Vulnerability Context Analysis',
      description: 'Correlates vulnerability metadata with exploitability and exposure signals',
      stat: 'CVSS + Context',
      subtext: 'Risk-aware prioritization',
    },
    {
      icon: TrendingUp,
      title: 'Risk Prioritization',
      description: 'AI-assisted ranking of vulnerabilities by real-world impact',
      stat: 'Real-Time',
      subtext: 'Continuous evaluation',
    },
    {
      icon: Radio,
      title: 'Threat Intelligence Signals',
      description: 'Integrates public exploit and threat pattern indicators',
      stat: 'Multi-Source',
      subtext: 'Context enrichment',
    },
    {
      icon: Layers,
      title: 'Asset Exposure',
      description: 'Considers authentication, exposure, and business value',
      stat: 'Contextual',
      subtext: 'Asset-centric risk',
    },
    {
      icon: FileText,
      title: 'Explainable Risk Scoring',
      description: 'Clear reasoning behind each risk decision',
      stat: 'Transparent',
      subtext: 'Analyst-friendly',
    },
    {
      icon: Lock,
      title: 'Security-First Architecture',
      description: 'Designed for SOC and security team workflows',
      stat: 'Internal Tool',
      subtext: 'Enterprise-ready',
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-gradient-to-br from-[#0F1419] via-[#1A202C] to-[#2C1810]">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(${hexColors.navy.light}22 1px, transparent 1px), linear-gradient(90deg, ${hexColors.navy.light}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Smart Risks.<br />
            Rooted Growth
          </h1>
          <p className="text-2xl text-white/70 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Navigate uncertainty with data-driven insights
          </p>

          {/* CTA Button */}
          <Link to="/dashboard">
            <button 
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300"
              style={{ 
                background: `linear-gradient(135deg, ${hexColors.navy.DEFAULT} 0%, ${hexColors.navy.dark} 100%)`,
                boxShadow: `0 20px 40px ${hexColors.navy.darker}80`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${hexColors.navy.dark} 0%, ${hexColors.navy.darker} 100%)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${hexColors.navy.DEFAULT} 0%, ${hexColors.navy.dark} 100%)`;
              }}
            >
              Go to Dashboard
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 transition-all duration-500 cursor-pointer"
                style={{
                  background: hoveredCard === index 
                    ? `linear-gradient(135deg, ${hexColors.navy.dark}CC 0%, ${hexColors.brown.dark}CC 100%)`
                    : `linear-gradient(135deg, ${hexColors.navy.dark}99 0%, ${hexColors.brown.dark}99 100%)`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${hoveredCard === index ? hexColors.navy.light + '60' : 'rgba(255, 255, 255, 0.1)'}`,
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-6">
                  <div 
                    className="rounded-2xl p-4 inline-block transition-all duration-300"
                    style={{ 
                      background: hoveredCard === index 
                        ? `linear-gradient(135deg, ${hexColors.navy.light}40 0%, ${hexColors.brown.light}40 100%)`
                        : `${hexColors.navy.darker}60`,
                    }}
                  >
                    <Icon className="size-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 mb-6 text-sm">
                  {feature.description}
                </p>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-white">
                    {feature.stat}
                  </div>
                  <div className="text-sm text-white/50">
                    {feature.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
