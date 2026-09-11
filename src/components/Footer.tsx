import React from 'react';
import { Compass, Mail, MapPin, Phone, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#071B33] text-white border-t border-slate-800">
      {/* Brand value statement banner */}
      <div className="border-b border-slate-800/80 bg-[#081D35] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0D2745] border border-[#FFB703]/30 flex items-center justify-center text-[#FFB703]">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <p className="font-sora text-lg font-bold text-white tracking-tight">
                "Leadership is something young people can practice every day."
              </p>
              <p className="text-xs text-[#FFB703] font-semibold tracking-wider uppercase mt-0.5">
                INVENT Youth Leadership Initiative • Designed for African Teenagers
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('assessment')}
              className="px-5 py-2.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] font-bold text-sm transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Take Free Assessment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-5 py-2.5 rounded-xl bg-[#0D2745] hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700"
            >
              <span>View Pathways</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main footer navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D2745] flex items-center justify-center text-[#FFB703] border border-slate-700">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sora text-xl font-extrabold tracking-tight text-white">
                  INVENT
                </span>
                <p className="text-[10px] font-bold tracking-widest text-[#FFB703] uppercase">
                  Leadership Journey™
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              A structured leadership and character development curriculum empowering Nigerian secondary school students to make sound decisions, lead teams, serve communities, and create lasting impact.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFB703]" />
                <span>Victoria Island, Lagos & Central Business District, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFB703]" />
                <span>admissions@inventleadership.ng</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFB703]" />
                <span>+234 (0) 800-468-368</span>
              </div>
            </div>
          </div>

          {/* Col 2: Platform */}
          <div>
            <h4 className="font-sora text-xs font-bold text-[#FFB703] uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('journeys')} className="hover:text-white hover:underline transition-colors text-left">
                  14 Leadership Journeys
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('assessment')} className="hover:text-white hover:underline transition-colors text-left">
                  Leadership Assessment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white hover:underline transition-colors text-left">
                  Pricing & Pathways
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('student-dashboard')} className="hover:text-white hover:underline transition-colors text-left">
                  Student Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-white hover:underline transition-colors text-left">
                  Student Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('badges')} className="hover:text-white hover:underline transition-colors text-left">
                  Badges & Honors
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: For Parents */}
          <div>
            <h4 className="font-sora text-xs font-bold text-[#FFB703] uppercase tracking-wider mb-4">
              For Parents
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('for-parents')} className="hover:text-white hover:underline transition-colors text-left">
                  Parent Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('parent-dashboard')} className="hover:text-white hover:underline transition-colors text-left">
                  Parent Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('for-parents')} className="hover:text-white hover:underline transition-colors text-left">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('for-parents')} className="hover:text-white hover:underline transition-colors text-left">
                  Conversation Starters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('certificates')} className="hover:text-white hover:underline transition-colors text-left">
                  Verified Certificates
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: For Schools & Mentors */}
          <div>
            <h4 className="font-sora text-xs font-bold text-[#FFB703] uppercase tracking-wider mb-4">
              For Schools
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('for-schools')} className="hover:text-white hover:underline transition-colors text-left">
                  School Programme
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('school-dashboard')} className="hover:text-white hover:underline transition-colors text-left">
                  Administrator Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('teacher-dashboard')} className="hover:text-white hover:underline transition-colors text-left">
                  Teacher / Mentor Review
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white hover:underline transition-colors text-left">
                  Institutional Pricing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('for-schools')} className="hover:text-white hover:underline transition-colors text-left">
                  Curriculum Alignment
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Country bar */}
      <div className="bg-[#051426] py-6 border-t border-slate-800/80 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#FFB703]">INVENT</span>
            <span>•</span>
            <span className="font-medium text-slate-300">Learn. Lead. Serve. Create Impact.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Nigeria
            </span>
            <span>© 2026 INVENT Leadership Journey™</span>
            <span className="text-slate-500">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
