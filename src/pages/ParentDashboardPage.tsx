import React, { useState } from 'react';
import { 
  Users, 
  HeartHandshake, 
  MessageSquare, 
  Award, 
  Compass, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Calendar,
  Smile
} from 'lucide-react';
import { MOCK_PARENT_PROFILE } from '../data/mockData';
import { ProgressBar } from '../components/ProgressBar';

export const ParentDashboardPage: React.FC = () => {
  const [selectedChildId, setSelectedChildId] = useState(MOCK_PARENT_PROFILE.children[0].id);

  const activeChild = MOCK_PARENT_PROFILE.children.find(c => c.id === selectedChildId) || MOCK_PARENT_PROFILE.children[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        {/* Parent Header */}
        <div className="bg-[#071B33] text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D2745] border border-slate-700 text-xs font-bold text-[#FFB703] uppercase">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Parent Leadership Companion</span>
            </div>
            <h1 className="font-sora text-3xl font-extrabold text-white">
              Good afternoon, {MOCK_PARENT_PROFILE.parentName}
            </h1>
            <p className="text-sm text-slate-300">
              Supporting your teenager's character growth, ethical choices, and leadership confidence.
            </p>
          </div>

          {/* Child Switcher Dropdown / Tabs */}
          <div className="bg-[#0D2745] p-3 rounded-2xl border border-slate-700 space-y-2 min-w-[260px]">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Viewing Child Progress:
            </p>
            <div className="flex gap-1.5">
              {MOCK_PARENT_PROFILE.children.map((child) => (
                <button
                  key={child.id}
                  onClick={() => setSelectedChildId(child.id)}
                  className={`flex-1 px-3 py-2 rounded-xl text-xs font-bold transition-all text-center ${
                    selectedChildId === child.id
                      ? 'bg-[#FFB703] text-[#071B33] shadow-xs'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {child.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Child Summary Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-[#071B33] flex items-center justify-center font-sora font-extrabold text-2xl">
                {activeChild.name[0]}
              </div>
              <div>
                <h2 className="font-sora text-2xl font-bold text-[#071B33]">
                  {activeChild.name}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {activeChild.classGrade} • {activeChild.school}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Active Learner • Last practice 2 hours ago</span>
              </span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-500">Overall Progress</span>
              <p className="font-sora text-2xl font-extrabold text-[#071B33] mt-1">{activeChild.progress}%</p>
              <div className="mt-2">
                <ProgressBar progress={activeChild.progress} size="sm" showPercentage={false} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-500">Journeys Mastered</span>
              <p className="font-sora text-2xl font-extrabold text-[#071B33] mt-1">{activeChild.completedJourneys} / 14</p>
              <span className="text-[10px] text-slate-400">Foundation & Interpersonal</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-500">Honors & Badges</span>
              <p className="font-sora text-2xl font-extrabold text-[#071B33] mt-1">{activeChild.badges}</p>
              <span className="text-[10px] text-[#FFB703] font-bold">Character badges</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-500">Verified Evidence</span>
              <p className="font-sora text-2xl font-extrabold text-[#071B33] mt-1">{activeChild.evidenceSubmitted}</p>
              <span className="text-[10px] text-emerald-600 font-bold">School verified</span>
            </div>
          </div>
        </div>

        {/* Dinner-Table Conversation Starter & Current Active Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Dinner Table Conversation Starter */}
          <div className="bg-amber-50 rounded-3xl border-2 border-amber-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-[#071B33]">
              <MessageSquare className="w-5 h-5 text-[#FFB703]" />
              <span className="text-xs font-extrabold uppercase tracking-wider">
                Weekly Dinner-Table Conversation Starter
              </span>
            </div>

            <h3 className="font-sora text-xl font-bold text-[#071B33]">
              "{activeChild.conversationStarterPrompt}"
            </h3>

            <div className="p-4 bg-white/90 rounded-2xl border border-amber-200 text-xs text-slate-700 space-y-2 leading-relaxed">
              <p className="font-bold text-[#071B33]">Parent Coaching Tip:</p>
              <p>
                When your child shares a difficult experience, avoid giving immediate advice or scolding. Ask: <em>"What did that situation teach you about yourself?"</em> and celebrate their honesty.
              </p>
            </div>
          </div>

          {/* Current Active Journey Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#FFB703] bg-[#071B33] px-2.5 py-1 rounded">
                Current Active Journey
              </span>
              <span className="text-xs font-bold text-slate-500">74% Done</span>
            </div>

            <h3 className="font-sora text-2xl font-bold text-[#071B33]">
              {activeChild.currentJourney}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed font-inter">
              Your child is currently exploring the psychology of resilience in Nigerian secondary schools: dealing with unfair decisions, academic setbacks, and handling exam pressure constructively.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFB703]" />
              <span>Assigned School Mentor: <strong>Mr. Emmanuel Okafor</strong></span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
