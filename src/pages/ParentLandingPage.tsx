import React from 'react';
import { HeartHandshake, CheckCircle2, Award, Compass, MessageSquare, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface ParentLandingPageProps {
  onNavigate: (view: string) => void;
}

export const ParentLandingPage: React.FC<ParentLandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Hero */}
      <section className="bg-[#071B33] text-white py-16 lg:py-24 text-left border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D2745] border border-slate-700 text-xs font-bold text-[#FFB703] uppercase">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>For Nigerian Parents & Guardians</span>
            </div>
            <h1 className="font-sora text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Help your child grow beyond the classroom.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-inter">
              Academic excellence is vital, but character, communication, and emotional resilience will define their lifetime success. INVENT provides structured, values-based leadership training built for Nigerian teenagers.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] font-sora font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Enroll Your Teenager</span>
                <ArrowRight className="w-4 h-4 text-[#071B33]" />
              </button>
              <button
                onClick={() => onNavigate('parent-dashboard')}
                className="px-6 py-3.5 rounded-xl bg-[#0D2745] hover:bg-[#13335a] text-white font-sora font-semibold text-sm border border-slate-700 transition-all"
              >
                <span>Preview Parent Portal</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars for Parents */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-sora text-2xl sm:text-3xl font-bold text-[#071B33]">
            What You Receive as an INVENT Parent
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#071B33] flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-[#FFB703]" />
            </div>
            <h3 className="font-sora text-lg font-bold text-[#071B33]">
              Dinner-Table Conversation Starters
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-inter">
              Receive weekly discussion prompts aligned with your child's current journey. Connect deeply with your teenager on themes like peer pressure, integrity, and future vision.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#159A6C] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-sora text-lg font-bold text-[#071B33]">
              Real-World Evidence Tracking
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-inter">
              See actual proof of your child leading: speeches delivered in school, community cleanups organized, and peer mediation sessions reviewed by certified teachers.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-[#071B33] flex items-center justify-center">
              <Award className="w-6 h-6 text-[#071B33]" />
            </div>
            <h3 className="font-sora text-lg font-bold text-[#071B33]">
              Admissions-Ready Portfolio
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-inter">
              Build an accredited leadership credential and verified digital portfolio that stands out in Nigerian, UK, Canadian, and US university scholarship applications.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
