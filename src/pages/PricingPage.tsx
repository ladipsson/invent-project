import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, School, User, HelpCircle } from 'lucide-react';
import { PRICING_TIERS, SCHOOL_PRICING_TIERS } from '../data/mockData';

interface PricingPageProps {
  onNavigate: (view: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [tab, setTab] = useState<'individual' | 'schools'>('individual');

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#FFB703] bg-[#071B33] px-3 py-1 rounded-full uppercase tracking-widest">
            Investment in Character & Excellence
          </span>
          <h1 className="font-sora text-3xl sm:text-5xl font-extrabold text-[#071B33] tracking-tight">
            Transparent, Accessible Pricing.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Priced in Nigerian Naira (₦) for secondary school students, families, and educational institutions nationwide.
          </p>

          {/* Switcher Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="p-1.5 bg-slate-200/80 rounded-2xl flex gap-2">
              <button
                onClick={() => setTab('individual')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold font-sora transition-all flex items-center gap-2 ${
                  tab === 'individual'
                    ? 'bg-[#071B33] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#071B33]'
                }`}
              >
                <User className="w-4 h-4 text-[#FFB703]" />
                <span>For Students & Parents</span>
              </button>

              <button
                onClick={() => setTab('schools')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold font-sora transition-all flex items-center gap-2 ${
                  tab === 'schools'
                    ? 'bg-[#071B33] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#071B33]'
                }`}
              >
                <School className="w-4 h-4 text-[#FFB703]" />
                <span>For Schools & Cohorts</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        {tab === 'individual' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  tier.isPopular
                    ? 'bg-white border-2 border-[#FFB703] shadow-xl ring-2 ring-[#FFB703]/20 relative'
                    : 'bg-white border border-slate-200 shadow-xs'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFB703] text-[#071B33] text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-xs">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-sora text-xl font-bold text-[#071B33]">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pb-4 border-b border-slate-100">
                    <span className="font-sora text-3xl sm:text-4xl font-extrabold text-[#071B33]">
                      {tier.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 ml-1">
                      {tier.period}
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-700 font-medium">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#159A6C] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNavigate('student-dashboard')}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold font-sora transition-all flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? 'bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] shadow-md'
                        : 'bg-[#071B33] hover:bg-[#0D2745] text-white'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SCHOOL_PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  tier.isPopular
                    ? 'bg-white border-2 border-[#FFB703] shadow-xl ring-2 ring-[#FFB703]/20 relative'
                    : 'bg-white border border-slate-200 shadow-xs'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFB703] text-[#071B33] text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-xs">
                    Recommended for Schools
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-sora text-xl font-bold text-[#071B33]">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pb-4 border-b border-slate-100">
                    <span className="font-sora text-3xl font-extrabold text-[#071B33]">
                      {tier.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 ml-1">
                      {tier.period}
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-700 font-medium">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#159A6C] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNavigate('school-dashboard')}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold font-sora transition-all flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? 'bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] shadow-md'
                        : 'bg-[#071B33] hover:bg-[#0D2745] text-white'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Nigerian Payment FAQs & Trust */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
          <h3 className="font-sora text-xl font-bold text-[#071B33]">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50">
              <span className="font-bold text-[#071B33] text-sm block">What payment methods are supported?</span>
              <p>We accept all Nigerian bank debit cards (Mastercard, Visa, Verve), Paystack, Flutterwave, USSD, and direct school bank transfers in NGN.</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50">
              <span className="font-bold text-[#071B33] text-sm block">Can students use the platform on their phones?</span>
              <p>Yes. INVENT is designed mobile-first and optimized for lightweight data usage on MTN, Airtel, Glo, and 9mobile networks across Nigeria.</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50">
              <span className="font-bold text-[#071B33] text-sm block">Are certificates recognized internationally?</span>
              <p>Yes, all INVENT certificates include an authentic verification ID and verifiable digital portfolio link that can be attached to UK UCAS, Common App, and African university applications.</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50">
              <span className="font-bold text-[#071B33] text-sm block">How does school cohort onboarding work?</span>
              <p>Schools can bulk-import students via CSV. Each student receives an activation code and is mapped to their class teacher and house mentor.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
