import React, { useState } from 'react';
import { 
  Compass, 
  BookOpen, 
  Award, 
  FileText, 
  CheckCircle2, 
  Clock, 
  UploadCloud, 
  ChevronRight, 
  Sparkles, 
  Flame, 
  Settings, 
  LogOut, 
  User, 
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Filter,
  BarChart3
} from 'lucide-react';
import { Journey, StudentProfile, Badge, EvidenceItem } from '../types';
import { ProgressBar } from '../components/ProgressBar';

interface StudentDashboardPageProps {
  studentProfile: StudentProfile;
  journeys: Journey[];
  badges: Badge[];
  evidenceList: EvidenceItem[];
  onSelectJourney: (journeyId: string) => void;
  onNavigate: (view: string) => void;
  onOpenEvidenceModal: () => void;
}

export const StudentDashboardPage: React.FC<StudentDashboardPageProps> = ({
  studentProfile,
  journeys,
  badges,
  evidenceList,
  onSelectJourney,
  onNavigate,
  onOpenEvidenceModal
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'journeys' | 'portfolio' | 'badges'>('overview');
  const [statusFilter, setStatusFilter] = useState<'all' | 'in-progress' | 'completed' | 'available'>('all');

  const earnedBadgesCount = badges.filter(b => b.isEarned).length;
  const currentJourney = journeys.find(j => j.status === 'In Progress') || journeys[5];

  const filteredJourneys = journeys.filter(j => {
    if (statusFilter === 'in-progress') return j.status === 'In Progress';
    if (statusFilter === 'completed') return j.status === 'Completed';
    if (statusFilter === 'available') return j.status === 'Open';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Student Navigation Header Sub-bar */}
      <div className="bg-[#071B33] text-white border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Student ID & Welcome */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#0D2745] border-2 border-[#FFB703] text-[#FFB703] flex items-center justify-center font-sora font-extrabold text-xl shadow-md">
                DA
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#FFB703] bg-[#0D2745] px-2 py-0.5 rounded">
                    SSS 2 • King's College Lagos
                  </span>
                  <span className="text-xs text-slate-400">ID: KCL-2024-882</span>
                </div>
                <h1 className="font-sora text-2xl font-bold text-white mt-0.5">
                  Welcome back, {studentProfile.name}
                </h1>
                <p className="text-xs text-slate-300 font-medium">
                  "Keep going. Leadership grows through practice."
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenEvidenceModal}
                className="px-4 py-2.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold font-sora flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <UploadCloud className="w-4 h-4 text-[#071B33]" />
                <span>Submit Evidence</span>
              </button>
              <button
                onClick={() => onNavigate('certificates')}
                className="px-4 py-2.5 rounded-xl bg-[#0D2745] hover:bg-[#13335a] text-white text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Award className="w-4 h-4 text-[#FFB703]" />
                <span>My Certificates</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-1">
            <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-left">
              Student Navigation
            </div>

            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'journeys', label: 'My Journeys', count: '14', icon: Compass },
              { id: 'assessment', label: 'Assessment', icon: Sparkles, directView: 'assessment' },
              { id: 'portfolio', label: 'Leadership Portfolio', count: evidenceList.length, icon: FileText, directView: 'portfolio' },
              { id: 'badges', label: 'Badges & Honors', count: `${earnedBadgesCount}/14`, icon: Award, directView: 'badges' },
              { id: 'certificates', label: 'Certificates', count: '2', icon: ShieldCheck, directView: 'certificates' },
              { id: 'mentorship', label: 'Mentor Notes', icon: MessageSquare }
            ].map((item) => {
              const Icon = item.icon;
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.directView) {
                      onNavigate(item.directView);
                    } else {
                      setActiveTab(item.id as any);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                    isSelected
                      ? 'bg-[#071B33] text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FFB703]' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.count && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-slate-800 text-[#FFB703]' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Mentor Info Box in Sidebar */}
            <div className="pt-4 mt-4 border-t border-slate-100 text-left p-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Assigned School Mentor</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-[#071B33] flex items-center justify-center font-bold text-xs">
                  EO
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#071B33]">{studentProfile.mentorName}</p>
                  <p className="text-[10px] text-slate-500">King's College Lagos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center/Right Content Area */}
          <div className="lg:col-span-9 space-y-6 text-left">
            
            {/* Stats Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Overall Progress</span>
                  <TrendingUp className="w-4 h-4 text-[#FFB703]" />
                </div>
                <div className="font-sora text-3xl font-extrabold text-[#071B33] mt-2">
                  {studentProfile.overallProgress}%
                </div>
                <div className="mt-3">
                  <ProgressBar progress={studentProfile.overallProgress} size="sm" showPercentage={false} />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Journeys Completed</span>
                  <Compass className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="font-sora text-3xl font-extrabold text-[#071B33] mt-2">
                  5 <span className="text-sm font-semibold text-slate-400">/ 14</span>
                </div>
                <p className="text-[11px] font-bold text-[#159A6C] mt-2">1 in active progress</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Earned Badges</span>
                  <Award className="w-4 h-4 text-[#FFB703]" />
                </div>
                <div className="font-sora text-3xl font-extrabold text-[#071B33] mt-2">
                  {earnedBadgesCount}
                </div>
                <p className="text-[11px] font-bold text-[#FFB703] mt-2">Communication Pro unlocked</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Evidence Files</span>
                  <FileText className="w-4 h-4 text-sky-500" />
                </div>
                <div className="font-sora text-3xl font-extrabold text-[#071B33] mt-2">
                  {evidenceList.length}
                </div>
                <p className="text-[11px] font-medium text-slate-400 mt-2">Verified portfolio items</p>
              </div>

            </div>

            {/* Current Journey Highlight Banner */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#071B33] to-[#0A2647] text-white shadow-md relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D2745] border border-slate-700 text-[10px] font-bold text-[#FFB703] uppercase tracking-wider">
                    <Flame className="w-3.5 h-3.5 text-[#FFB703]" />
                    <span>Current Active Journey</span>
                  </div>
                  <h3 className="font-sora text-2xl sm:text-3xl font-extrabold text-white">
                    Journey {currentJourney.number}: {currentJourney.title}
                  </h3>
                  <p className="text-xs text-slate-300 italic max-w-lg">
                    "{currentJourney.tagline}"
                  </p>
                  <p className="text-xs text-slate-400 font-medium">
                    Next step: Submit 2-minute elevator pitch evidence to mentor.
                  </p>
                </div>

                <div className="bg-[#0D2745] p-4 rounded-2xl border border-slate-700 text-right min-w-[200px]">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-1.5">
                    <span>Progress</span>
                    <span className="text-[#FFB703] font-sora font-extrabold text-sm">{currentJourney.progress}%</span>
                  </div>
                  <ProgressBar progress={currentJourney.progress} size="sm" showPercentage={false} />
                  <button
                    onClick={() => onSelectJourney(currentJourney.id)}
                    className="mt-4 w-full py-2.5 px-4 bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Continue Journey</span>
                    <ChevronRight className="w-4 h-4 text-[#071B33]" />
                  </button>
                </div>
              </div>
            </div>

            {/* 14 Powers Journey Map */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-sora text-xl font-bold text-[#071B33]">
                    14 Powers of Leadership Journey Map
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Track your progression across all 14 character development milestones.
                  </p>
                </div>

                {/* Status Filter Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {(['all', 'in-progress', 'completed', 'available'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setStatusFilter(filter)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors ${
                        statusFilter === filter
                          ? 'bg-[#071B33] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {filter.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Journey Map Table / Rows */}
              <div className="space-y-3">
                {filteredJourneys.map((journey) => {
                  const isCompleted = journey.status === 'Completed';
                  const isInProgress = journey.status === 'In Progress';
                  const isLocked = journey.status === 'Locked';

                  return (
                    <div
                      key={journey.id}
                      className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isInProgress
                          ? 'border-[#FFB703] bg-amber-50/30 ring-1 ring-[#FFB703]'
                          : isCompleted
                          ? 'border-slate-200 bg-slate-50/50'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {/* Left: Number & Title */}
                      <div className="flex items-center gap-3">
                        <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-sora font-extrabold text-sm ${
                          isCompleted
                            ? 'bg-emerald-100 text-[#159A6C]'
                            : isInProgress
                            ? 'bg-[#071B33] text-[#FFB703]'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {journey.number}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-sora text-sm font-bold text-[#071B33] uppercase">
                              {journey.title}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                              {journey.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 italic">
                            "{journey.tagline}"
                          </p>
                        </div>
                      </div>

                      {/* Right: Status & Action */}
                      <div className="flex items-center gap-4 sm:w-72 justify-between sm:justify-end">
                        
                        {/* Progress */}
                        <div className="w-24">
                          <ProgressBar 
                            progress={journey.progress} 
                            size="sm" 
                            variant={isCompleted ? 'green' : 'gold'}
                          />
                        </div>

                        {/* Status badge */}
                        <div className="min-w-[80px] text-right">
                          {isCompleted && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#159A6C]">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Done</span>
                            </span>
                          )}
                          {isInProgress && (
                            <span className="text-xs font-bold text-[#071B33] bg-amber-100 px-2 py-0.5 rounded">
                              Active
                            </span>
                          )}
                          {journey.status === 'Open' && (
                            <span className="text-xs font-semibold text-slate-500">
                              Ready
                            </span>
                          )}
                          {isLocked && (
                            <span className="text-xs text-slate-400">
                              Locked
                            </span>
                          )}
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={() => onSelectJourney(journey.id)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
                            isInProgress
                              ? 'bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33]'
                              : isCompleted
                              ? 'bg-slate-100 hover:bg-slate-200 text-[#071B33]'
                              : 'bg-slate-100 hover:bg-[#071B33] hover:text-white text-[#071B33]'
                          }`}
                        >
                          {isCompleted ? 'Review' : isInProgress ? 'Resume' : 'Open'}
                        </button>

                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
