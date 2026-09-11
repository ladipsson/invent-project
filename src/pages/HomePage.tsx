import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Award, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Flame, 
  MessageSquare, 
  Lightbulb, 
  Eye, 
  TrendingUp, 
  HeartHandshake,
  ArrowUpRight,
  Target,
  ChevronRight
} from 'lucide-react';
import { Journey, StudentProfile } from '../types';
import { HeroIllustration } from '../components/HeroIllustration';
import { ProgressBar } from '../components/ProgressBar';

interface HomePageProps {
  journeys: Journey[];
  studentProfile: StudentProfile;
  onNavigate: (view: string) => void;
  onSelectJourney: (journeyId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  journeys,
  studentProfile,
  onNavigate,
  onSelectJourney
}) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#132238]">
      
      {/* ================================================== */}
      {/* 6. HERO SECTION (Dark Navy Background #071B33)     */}
      {/* ================================================== */}
      <section className="relative bg-[#071B33] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b border-slate-800">
        
        {/* Subtle geometric background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full border border-[#FFB703]/20" />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full border border-[#FFB703]/10 stroke-dash" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D2745] border border-slate-700 text-xs font-bold tracking-wider text-[#FFB703] uppercase">
                <Compass className="w-3.5 h-3.5 text-[#FFB703]" />
                <span>INVENT YOUTH LEADERSHIP INITIATIVE</span>
              </div>

              {/* Major Sora ExtraBold Hero Headline */}
              <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                LEARN.<br />
                <span className="text-[#FFB703]">LEAD.</span><br />
                SERVE.<br />
                <span className="text-[#FFB703]">CREATE IMPACT.</span>
              </h1>

              {/* Supporting description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-inter">
                A practical leadership journey designed to help young people discover themselves, make better decisions, work with others and create meaningful impact.
              </p>

              {/* Call-to-action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onNavigate('student-dashboard')}
                  className="px-7 py-3.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] font-sora font-bold text-base shadow-lg shadow-[#FFB703]/10 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  id="hero-start-journey-button"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 text-[#071B33]" />
                </button>

                <button
                  onClick={() => onNavigate('assessment')}
                  className="px-6 py-3.5 rounded-xl bg-[#0D2745] hover:bg-[#13335a] text-white font-sora font-semibold text-base border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
                  id="hero-free-assessment-button"
                >
                  <span>Take Free Assessment</span>
                  <Sparkles className="w-4 h-4 text-[#FFB703]" />
                </button>
              </div>

              {/* Small trust/value indicators */}
              <div className="pt-6 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                  <span>14 Leadership Powers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                  <span>Interactive Workbooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                  <span>Real-Life Scenarios</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                  <span>Badges & Certificates</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                  <span>Parent & School Support</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroIllustration />
            </div>

          </div>
        </div>

      </section>


      {/* ================================================== */}
      {/* 7. SOCIAL PROOF / TRUST STRIP                      */}
      {/* ================================================== */}
      <section className="bg-white border-b border-slate-200 py-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="font-sora text-sm font-bold uppercase tracking-widest text-[#64748B]">
              Built for the leaders young people are becoming
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#071B33] flex items-center justify-center mx-auto mb-2">
                <Compass className="w-5 h-5 text-[#071B33]" />
              </div>
              <div className="font-sora text-2xl lg:text-3xl font-extrabold text-[#071B33]">
                14
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-1">
                Leadership Journeys
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#071B33] flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-5 h-5 text-[#071B33]" />
              </div>
              <div className="font-sora text-2xl lg:text-3xl font-extrabold text-[#071B33]">
                Interactive
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-1">
                Learning Experiences
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#159A6C] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-5 h-5 text-[#159A6C]" />
              </div>
              <div className="font-sora text-2xl lg:text-3xl font-extrabold text-[#071B33]">
                Evidence-Based
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-1">
                Verified Progress
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#071B33] flex items-center justify-center mx-auto mb-2">
                <Award className="w-5 h-5 text-[#071B33]" />
              </div>
              <div className="font-sora text-2xl lg:text-3xl font-extrabold text-[#071B33]">
                Student
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-1">
                Leadership Portfolio
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================================================== */}
      {/* 8. "NOT ANOTHER VIDEO COURSE" SECTION              */}
      {/* ================================================== */}
      <section className="py-20 bg-[#F1F5F9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#FFB703] bg-[#071B33] px-3 py-1 rounded-full uppercase tracking-widest">
              The INVENT Difference
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
              Not another video course.
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Leadership grows through practice — not passive watching.
            </p>
          </div>

          {/* Interactive Learning Flow visual */}
          <div className="mb-14 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-6">
              The 8-Stage Cycle of Practical Mastery
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-sora font-bold text-[#071B33]">
              {['Understand', 'Explore', 'Practise', 'Decide', 'Act', 'Reflect', 'Prove', 'Progress'].map((step, idx, arr) => (
                <React.Fragment key={step}>
                  <div className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-[#FFB703] hover:text-[#071B33] transition-colors border border-slate-200/80 cursor-default">
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="text-slate-300 font-bold hidden sm:inline">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Three Core Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#071B33] text-[#FFB703] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-sora text-xl font-bold text-[#071B33] tracking-tight mb-2">
                  PRACTISE
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-inter">
                  Students work through realistic situations in classrooms, school hostels, sports teams, and peer circles.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#071B33] flex items-center gap-1">
                <span>Action-based modules</span>
                <ChevronRight className="w-4 h-4 text-[#FFB703]" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#071B33] text-[#FFB703] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-sora text-xl font-bold text-[#071B33] tracking-tight mb-2">
                  DECIDE
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-inter">
                  Students make choices and experience consequences in branching interactive case studies before facing them in real life.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#071B33] flex items-center gap-1">
                <span>Branching scenarios</span>
                <ChevronRight className="w-4 h-4 text-[#FFB703]" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#071B33] text-[#FFB703] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-sora text-xl font-bold text-[#071B33] tracking-tight mb-2">
                  REFLECT
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-inter">
                  Students understand what their choices reveal about them through guided journaling, peer review, and mentor dialogue.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#071B33] flex items-center gap-1">
                <span>Reflective journals</span>
                <ChevronRight className="w-4 h-4 text-[#FFB703]" />
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('journeys')}
              className="px-6 py-3 rounded-xl bg-[#071B33] hover:bg-[#0D2745] text-white font-sora font-bold text-sm transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <span>Explore How It Works</span>
              <ArrowRight className="w-4 h-4 text-[#FFB703]" />
            </button>
          </div>

        </div>
      </section>


      {/* ================================================== */}
      {/* 9. 14 LEADERSHIP POWERS SECTION                    */}
      {/* ================================================== */}
      <section className="py-24 bg-white border-b border-slate-200" id="journeys-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase tracking-widest">
              Curriculum Pathway
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
              14 Powers. One Journey.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium">
              A structured pathway for developing practical leadership skills.
            </p>
          </div>

          {/* 14 Cards Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {journeys.map((journey) => {
              const isCompleted = journey.status === 'Completed';
              const isInProgress = journey.status === 'In Progress';
              
              return (
                <div
                  key={journey.id}
                  className={`relative p-6 rounded-2xl border transition-all flex flex-col justify-between text-left ${
                    isInProgress
                      ? 'border-[#FFB703] bg-amber-50/20 shadow-md ring-1 ring-[#FFB703]'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Header: Number & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sora text-3xl font-extrabold text-[#FFB703]">
                        {journey.number}
                      </span>
                      {isCompleted && (
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100 text-[#159A6C] text-xs font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Done</span>
                        </span>
                      )}
                      {isInProgress && (
                        <span className="px-2.5 py-1 rounded-md bg-amber-100 text-[#071B33] text-xs font-bold">
                          In Progress
                        </span>
                      )}
                      {journey.status === 'Open' && (
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold">
                          Available
                        </span>
                      )}
                      {journey.status === 'Locked' && (
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-400 text-xs font-medium">
                          Next Stage
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-sora text-lg font-bold text-[#071B33] tracking-tight uppercase mb-2">
                      {journey.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-5 font-inter">
                      {journey.shortDesc}
                    </p>
                  </div>

                  {/* Footer: Progress & Button */}
                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    <ProgressBar 
                      progress={journey.progress} 
                      size="sm" 
                      variant={isCompleted ? 'green' : 'gold'}
                    />

                    <button
                      onClick={() => onSelectJourney(journey.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 ${
                        isInProgress
                          ? 'bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33]'
                          : 'bg-slate-100 hover:bg-[#071B33] hover:text-white text-[#071B33]'
                      }`}
                    >
                      <span>Explore Journey</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('journeys')}
              className="px-8 py-3.5 rounded-xl bg-[#071B33] hover:bg-[#0D2745] text-white font-sora font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>View Full 14-Powers Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#FFB703]" />
            </button>
          </div>

        </div>
      </section>


      {/* ================================================== */}
      {/* 10. HOW THE JOURNEY WORKS                          */}
      {/* ================================================== */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#FFB703] bg-[#071B33] px-3 py-1 rounded-full uppercase tracking-widest">
              Experiential Methodology
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
              Leadership is learned by doing.
            </h2>
            <p className="text-base text-slate-600">
              Each power follows a disciplined 5-phase progression designed for secondary school environments.
            </p>
          </div>

          {/* 5-step process (horizontal on desktop, vertical on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              { num: '01', title: 'Discover', desc: 'Identify blind spots through self-assessment and foundational principles.', icon: Compass },
              { num: '02', title: 'Explore', desc: 'Study real Nigerian school dilemmas and leadership models.', icon: BookOpen },
              { num: '03', title: 'Practise', desc: 'Engage in branching decision exercises and classroom micro-actions.', icon: Target },
              { num: '04', title: 'Reflect', desc: 'Record personal takeaways in structured journal prompts.', icon: Eye },
              { num: '05', title: 'Prove', desc: 'Upload verified evidence to your portfolio for mentor review.', icon: Award }
            ].map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.num} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sora text-2xl font-extrabold text-[#FFB703]">
                        {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#071B33] flex items-center justify-center">
                        <StepIcon className="w-4 h-4 text-[#071B33]" />
                      </div>
                    </div>
                    <h3 className="font-sora text-base font-bold text-[#071B33] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-inter">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#071B33]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB703]" />
                    <span>Phase {step.num}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================================================== */}
      {/* 11. STUDENT EXPERIENCE PREVIEW                     */}
      {/* ================================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase tracking-widest">
              Live Learner Dashboard
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
              Your leadership journey. Your progress.
            </h2>
            <p className="text-base text-slate-600">
              Students have an intelligent, organized command center tracking every milestone and achievement.
            </p>
          </div>

          {/* Interactive Mock Dashboard Preview Card */}
          <div className="max-w-4xl mx-auto bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl">
            
            {/* Top Student Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#071B33] text-[#FFB703] flex items-center justify-center font-sora font-extrabold text-xl shadow-md border-2 border-[#FFB703]">
                  DA
                </div>
                <div className="text-left">
                  <h3 className="font-sora text-xl font-bold text-[#071B33]">
                    Welcome back, David!
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    King's College Lagos • SSS 2 (Science) • 14-day practice streak 🔥
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('student-dashboard')}
                className="px-4 py-2 bg-[#071B33] hover:bg-[#0D2745] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                Open Full Student Dashboard
              </button>
            </div>

            {/* Stats Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
                <p className="text-xs font-semibold text-slate-500">Progress</p>
                <p className="font-sora text-2xl font-extrabold text-[#071B33] mt-1">37%</p>
                <div className="mt-2 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#FFB703] h-full w-[37%]" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
                <p className="text-xs font-semibold text-slate-500">Journeys</p>
                <p className="font-sora text-2xl font-extrabold text-[#071B33] mt-1">5 / 14</p>
                <p className="text-[10px] text-emerald-600 font-bold mt-1">9 to unlock</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
                <p className="text-xs font-semibold text-slate-500">Badges</p>
                <p className="font-sora text-2xl font-extrabold text-[#071B33] mt-1">8</p>
                <p className="text-[10px] text-[#FFB703] font-bold mt-1">Honors earned</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
                <p className="text-xs font-semibold text-slate-500">Evidence</p>
                <p className="font-sora text-2xl font-extrabold text-[#071B33] mt-1">12</p>
                <p className="text-[10px] text-slate-400 font-medium mt-1">Verified files</p>
              </div>

            </div>

            {/* Current Journey Highlight Card */}
            <div className="p-6 rounded-2xl bg-white border-2 border-amber-200 shadow-sm text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#FFB703] bg-[#071B33] px-2 py-0.5 rounded">
                      CURRENT JOURNEY 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Interpersonal</span>
                  </div>
                  <h4 className="font-sora text-xl font-bold text-[#071B33]">
                    Communication
                  </h4>
                  <p className="text-xs text-slate-600 italic">
                    "Leadership begins with how we listen, speak and connect."
                  </p>
                </div>

                <div className="sm:text-right min-w-[160px]">
                  <p className="text-xs font-bold text-slate-700 mb-1">Progress: 72%</p>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden mb-3">
                    <div className="bg-[#FFB703] h-full w-[72%]" />
                  </div>
                  <button
                    onClick={() => onSelectJourney('journey-06')}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold rounded-xl shadow-xs transition-colors"
                  >
                    Continue Journey
                  </button>
                </div>
              </div>

              {/* Mini sub-cards: Upcoming challenge & reflection */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                  <p className="font-bold text-[#071B33] flex items-center gap-1.5 mb-1">
                    <Flame className="w-3.5 h-3.5 text-[#FFB703]" />
                    Upcoming Weekly Challenge:
                  </p>
                  <p className="text-slate-700">
                    Deliver a 2-minute elevator pitch to your class teacher without filler words.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200">
                  <p className="font-bold text-[#071B33] flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#071B33]" />
                    Daily Reflection Prompt:
                  </p>
                  <p className="text-slate-700">
                    Where does your message get lost when you speak under pressure?
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================================================== */}
      {/* DEDICATED AUDIENCE EXPERIENCES                     */}
      {/* ================================================== */}
      <section className="py-20 bg-[#F1F5F9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase tracking-widest">
              An Integrated Ecosystem
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
              One platform. Four connected experiences.
            </h2>
            <p className="text-base text-slate-600">
              Empowering students, reassuring parents, equipping teachers, and organizing schools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* For Parents */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between text-left">
              <div>
                <span className="text-[10px] font-extrabold text-[#FFB703] bg-[#071B33] px-2 py-0.5 rounded uppercase">
                  For Parents
                </span>
                <h3 className="font-sora text-xl font-bold text-[#071B33] mt-3 mb-2">
                  Help your child grow beyond the classroom.
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-inter mb-4">
                  Track your teenager's character growth, view earned badges, and receive curated dinner-table conversation prompts.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A6C]" />
                    <span>Real-time child progress tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A6C]" />
                    <span>Weekly conversation starters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A6C]" />
                    <span>Verified leadership credentials</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('for-parents')}
                className="mt-6 w-full py-2.5 px-4 bg-slate-100 hover:bg-[#071B33] hover:text-white text-[#071B33] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Explore Parent Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* For Teachers / Mentors */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between text-left">
              <div>
                <span className="text-[10px] font-extrabold text-[#FFB703] bg-[#071B33] px-2 py-0.5 rounded uppercase">
                  For Teachers & Mentors
                </span>
                <h3 className="font-sora text-xl font-bold text-[#071B33] mt-3 mb-2">
                  Review student evidence & guide real impact.
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-inter mb-4">
                  Review uploaded speeches, projects, and reflections using standard rubrics to encourage and evaluate student mastery.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A6C]" />
                    <span>Evidence review queue with rubrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A6C]" />
                    <span>Classroom activity guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A6C]" />
                    <span>Student assessment diagnostics</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('teacher-dashboard')}
                className="mt-6 w-full py-2.5 px-4 bg-slate-100 hover:bg-[#071B33] hover:text-white text-[#071B33] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Open Teacher Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* For Schools */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between text-left">
              <div>
                <span className="text-[10px] font-extrabold text-[#FFB703] bg-[#071B33] px-2 py-0.5 rounded uppercase">
                  For Schools & Principals
                </span>
                <h3 className="font-sora text-xl font-bold text-[#071B33] mt-3 mb-2">
                  Embed leadership into everyday school culture.
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-inter mb-4">
                  Monitor entire cohorts across JSS and SSS levels, export accreditation reports, and build a tradition of student integrity.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A6C]" />
                    <span>Cohort-level progress analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A6C]" />
                    <span>School-wide character reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A6C]" />
                    <span>Official school certificates</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('for-schools')}
                className="mt-6 w-full py-2.5 px-4 bg-slate-100 hover:bg-[#071B33] hover:text-white text-[#071B33] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Register School & View Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ================================================== */}
      {/* FINAL CALL TO ACTION BANNER                        */}
      {/* ================================================== */}
      <section className="bg-[#071B33] text-white py-16 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#FFB703] uppercase tracking-widest">
            Shape Nigeria's Next Generation
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to discover the leader inside you?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Take the free 10-minute leadership strengths assessment or enroll your student today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('assessment')}
              className="px-7 py-3.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] font-sora font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Take Free Assessment</span>
              <Sparkles className="w-4 h-4 text-[#071B33]" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-7 py-3.5 rounded-xl bg-[#0D2745] hover:bg-[#13335a] text-white font-sora font-semibold text-sm border border-slate-700 transition-all"
            >
              <span>View Plans & Pricing</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
