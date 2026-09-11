import React from 'react';
import { School, CheckCircle2, Award, Users, BookOpen, ArrowRight, ShieldCheck, Download, Sparkles } from 'lucide-react';

interface SchoolLandingPageProps {
  onNavigate: (view: string) => void;
}

export const SchoolLandingPage: React.FC<SchoolLandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Hero */}
      <section className="bg-[#071B33] text-white py-16 lg:py-24 text-left border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D2745] border border-slate-700 text-xs font-bold text-[#FFB703] uppercase">
              <School className="w-3.5 h-3.5" />
              <span>For Nigerian Secondary Schools</span>
            </div>
            <h1 className="font-sora text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Build leadership into your students' everyday learning.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-inter">
              Complement academic excellence with systematic character formation. INVENT equips your prefects, class captains, and entire cohorts with practical ethics, communication mastery, and proven accountability.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] font-sora font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>View School Licensing</span>
                <ArrowRight className="w-4 h-4 text-[#071B33]" />
              </button>
              <button
                onClick={() => onNavigate('school-dashboard')}
                className="px-6 py-3.5 rounded-xl bg-[#0D2745] hover:bg-[#13335a] text-white font-sora font-semibold text-sm border border-slate-700 transition-all"
              >
                <span>Launch School Portal Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* School Impact Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-sora text-2xl sm:text-3xl font-bold text-[#071B33]">
            Why Nigeria's Leading Schools Partner with INVENT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#071B33] flex items-center justify-center">
              <Award className="w-6 h-6 text-[#FFB703]" />
            </div>
            <h3 className="font-sora text-lg font-bold text-[#071B33]">
              Prefect & Student Council Training
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-inter">
              Turn appointed prefects into active moral leaders with structured training on de-escalating classroom conflicts, public speaking, and leading by example.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#159A6C] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-sora text-lg font-bold text-[#071B33]">
              Accreditation & School Reputation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-inter">
              Demonstrate evidence-based character formation to parents, school inspection boards, and international evaluators with verified digital portfolios.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-[#071B33] flex items-center justify-center">
              <Users className="w-6 h-6 text-[#071B33]" />
            </div>
            <h3 className="font-sora text-lg font-bold text-[#071B33]">
              Cohort-Wide Character Analytics
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-inter">
              Monitor student engagement across Junior and Senior secondary classes. Identify students who need guidance and celebrate high-performing youth leaders.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
