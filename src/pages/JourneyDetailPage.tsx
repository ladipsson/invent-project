import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Bookmark, 
  UploadCloud, 
  HelpCircle, 
  Compass, 
  Flame, 
  Sparkles, 
  Play, 
  Volume2, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { Journey } from '../types';
import { ProgressBar } from '../components/ProgressBar';

interface JourneyDetailPageProps {
  journey: Journey;
  onBack: () => void;
  onOpenEvidenceModal: () => void;
}

export const JourneyDetailPage: React.FC<JourneyDetailPageProps> = ({
  journey,
  onBack,
  onOpenEvidenceModal
}) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [selectedScenarioChoice, setSelectedScenarioChoice] = useState<string | null>(null);
  const [workbookAnswer, setWorkbookAnswer] = useState('');
  const [reflectionAnswer, setReflectionAnswer] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const sections = [
    { id: 'sec-1', number: 1, title: 'Explore', subtitle: 'Principles & Foundations' },
    { id: 'sec-2', number: 2, title: 'Real-Life Scenario', subtitle: 'Interactive Nigerian Context' },
    { id: 'sec-3', number: 3, title: 'Interactive Workbook', subtitle: 'Hands-on Exercises' },
    { id: 'sec-4', number: 4, title: 'Challenge', subtitle: 'Real-World Action' },
    { id: 'sec-5', number: 5, title: 'Reflection', subtitle: 'Personal Journaling' },
    { id: 'sec-6', number: 6, title: 'Evidence', subtitle: 'Portfolio Upload' },
    { id: 'sec-7', number: 7, title: 'Assessment', subtitle: 'Knowledge Check' }
  ];

  const handleSaveProgress = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleNext = () => {
    if (activeSectionIndex < sections.length - 1) {
      setActiveSectionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeSectionIndex > 0) {
      setActiveSectionIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back & Header Bar */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3 text-left">
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-[#071B33] transition-colors"
              title="Back to Catalog"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-[#FFB703] bg-[#071B33] px-2 py-0.5 rounded">
                  JOURNEY {journey.number}
                </span>
                <span className="text-xs font-semibold text-slate-500">{journey.category}</span>
              </div>
              <h1 className="font-sora text-2xl sm:text-3xl font-extrabold text-[#071B33] uppercase mt-0.5">
                {journey.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-right">
              <span className="text-[11px] font-bold text-slate-500 block">Overall Journey Progress</span>
              <span className="text-sm font-extrabold text-[#071B33]">{journey.progress}%</span>
            </div>
            <div className="w-24">
              <ProgressBar progress={journey.progress} size="sm" showPercentage={false} />
            </div>
          </div>
        </div>

        {/* Core Content Layout: Left Nav + Main Learning Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Panel */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-1">
            <div className="px-3 py-2 border-b border-slate-100 mb-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Journey Modules
              </p>
              <p className="text-xs font-semibold text-[#071B33] italic mt-1 line-clamp-2">
                "{journey.keyQuote}"
              </p>
            </div>

            {sections.map((sec, idx) => {
              const isActive = activeSectionIndex === idx;
              const isPast = idx < activeSectionIndex;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectionIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-[#071B33] text-white shadow-xs'
                      : isPast
                      ? 'bg-amber-50/50 text-[#071B33] hover:bg-slate-100'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                      isActive ? 'bg-[#FFB703] text-[#071B33]' : isPast ? 'bg-emerald-100 text-[#159A6C]' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {sec.number}
                    </span>
                    <div>
                      <div className="text-xs font-bold">{sec.title}</div>
                      <div className={`text-[10px] ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>{sec.subtitle}</div>
                    </div>
                  </div>
                  {isPast && <CheckCircle2 className="w-4 h-4 text-[#159A6C]" />}
                </button>
              );
            })}

            {/* Quick Evidence Action in Left Panel */}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <button
                onClick={onOpenEvidenceModal}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-[#071B33] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <UploadCloud className="w-4 h-4 text-[#071B33]" />
                <span>Submit Evidence for this Journey</span>
              </button>
            </div>
          </div>

          {/* Main Learning Stage */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm text-left">
              
              {/* Section 1: Explore */}
              {activeSectionIndex === 0 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase">
                      Section 1 of 7 • Explore
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Est. 12 mins</span>
                  </div>

                  <h2 className="font-sora text-2xl font-bold text-[#071B33]">
                    Understanding the Power of {journey.title}
                  </h2>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed text-sm space-y-3">
                    <p className="font-medium text-base text-[#071B33]">
                      "Leadership begins with how we listen, speak and connect."
                    </p>
                    <p>
                      {journey.fullDesc}
                    </p>
                    <p>
                      In Nigerian secondary schools, how you communicate with classmates, housemasters, and teachers directly determines whether you lead with influence or generate unnecessary resistance.
                    </p>
                  </div>

                  {/* Audio Guide Mockup */}
                  <div className="p-4 rounded-2xl bg-[#071B33] text-white flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FFB703] text-[#071B33] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Listen to Mentor Audio Lesson (4:30)</p>
                        <p className="text-[11px] text-slate-300">Narrated by Senior Mentor Mr. Emmanuel Okafor</p>
                      </div>
                    </div>
                    <Volume2 className="w-5 h-5 text-[#FFB703]" />
                  </div>
                </div>
              )}

              {/* Section 2: Real-Life Scenario */}
              {activeSectionIndex === 1 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase">
                      Section 2 of 7 • Real-Life Scenario
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Nigerian Classroom Case Study</span>
                  </div>

                  <h2 className="font-sora text-2xl font-bold text-[#071B33]">
                    {journey.realLifeScenario.title}
                  </h2>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <p className="text-xs font-bold text-[#071B33] uppercase tracking-wider">The Context:</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {journey.realLifeScenario.context}
                    </p>
                    <p className="text-xs font-bold text-[#FFB703] bg-[#071B33] p-3 rounded-xl mt-2">
                      Dilemma: {journey.realLifeScenario.dilemma}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      How will you choose to lead?
                    </p>
                    <div className="space-y-3">
                      {journey.realLifeScenario.options.map((opt) => {
                        const isSelected = selectedScenarioChoice === opt.id;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => setSelectedScenarioChoice(opt.id)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'border-[#FFB703] bg-amber-50/70 shadow-sm ring-1 ring-[#FFB703]'
                                : 'border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-bold text-[#071B33]">{opt.title}</span>
                              {isSelected && <CheckCircle2 className="w-4 h-4 text-[#FFB703]" />}
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed mt-1">
                              <span className="font-semibold text-slate-700">Consequence:</span> {opt.consequence}
                            </p>
                            {isSelected && (
                              <div className="mt-3 pt-3 border-t border-amber-200 text-xs font-medium text-[#071B33] bg-white p-3 rounded-lg">
                                <span className="font-bold text-amber-900">Leadership Insight:</span> {opt.leadershipInsight}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Section 3: Interactive Workbook */}
              {activeSectionIndex === 2 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase">
                      Section 3 of 7 • Interactive Workbook
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Self-Check Exercise</span>
                  </div>

                  <h2 className="font-sora text-2xl font-bold text-[#071B33]">
                    The Hook - Story - Point - Action Speech Blueprint
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Apply this framework to prepare your ideas when speaking to a peer group, debate opponent, or school assembly:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-[#071B33] block">1. The Hook (15s)</span>
                      <span className="text-slate-500">Ask a question or share a surprising fact about school life.</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-[#071B33] block">2. The Story (45s)</span>
                      <span className="text-slate-500">A relatable Nigerian example where unity or effort made a difference.</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-[#071B33] block">3. The Core Point (30s)</span>
                      <span className="text-slate-500">The clear message you want classmates to remember.</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-[#071B33] block">4. The Call to Action (30s)</span>
                      <span className="text-slate-500">One practical step everyone can take today.</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Draft your 2-minute speech outline here:
                    </label>
                    <textarea
                      rows={5}
                      value={workbookAnswer}
                      onChange={(e) => setWorkbookAnswer(e.target.value)}
                      placeholder="Hook: Have you ever noticed how our classroom gets noisier during math drills?...&#10;Story: Last term when our house won relay...&#10;Point: We can only win when everyone protects team focus...&#10;Action: Today, let us give our teacher 100% attention..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-[#071B33] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                    />
                  </div>
                </div>
              )}

              {/* Section 4: Challenge */}
              {activeSectionIndex === 3 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase">
                      Section 4 of 7 • Weekly Challenge
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Real-World Action</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-200 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#071B33] text-[#FFB703] flex items-center justify-center">
                      <Flame className="w-5 h-5" />
                    </div>
                    <h3 className="font-sora text-xl font-bold text-[#071B33]">
                      The 2-Minute Constructive Proposal Challenge
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {journey.challengePrompt}
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-600">
                      Rule: Do not complain without offering a solution. State what is good, what could be better, and how you will help.
                    </div>
                  </div>
                </div>
              )}

              {/* Section 5: Reflection */}
              {activeSectionIndex === 4 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase">
                      Section 5 of 7 • Reflection Journal
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Personal Growth</span>
                  </div>

                  <h2 className="font-sora text-2xl font-bold text-[#071B33]">
                    What Does Your Voice Reveal?
                  </h2>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <p className="text-xs font-bold text-[#071B33] uppercase">Reflection Prompt:</p>
                    <p className="text-sm text-slate-700 italic">
                      "{journey.reflectionPrompt}"
                    </p>
                  </div>

                  <div className="space-y-2">
                    <textarea
                      rows={6}
                      value={reflectionAnswer}
                      onChange={(e) => setReflectionAnswer(e.target.value)}
                      placeholder="Write your personal reflections honestly. Only your assigned mentor will review this..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-[#071B33] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                    />
                  </div>
                </div>
              )}

              {/* Section 6: Evidence */}
              {activeSectionIndex === 5 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase">
                      Section 6 of 7 • Submit Evidence
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Verify Practical Impact</span>
                  </div>

                  <h2 className="font-sora text-2xl font-bold text-[#071B33]">
                    Prove What You Learned
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    INVENT does not award completion for watching slides. Upload proof of your speech recording, written transcript, or classroom activity signoff.
                  </p>

                  <div className="p-8 border-2 border-dashed border-slate-300 rounded-2xl text-center bg-slate-50 space-y-3">
                    <UploadCloud className="w-12 h-12 text-[#FFB703] mx-auto" />
                    <h4 className="font-sora text-base font-bold text-[#071B33]">
                      Ready to submit evidence for Journey {journey.number}?
                    </h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Upload audio, video, photos, or documents. Your mentor will review and provide written rubric feedback.
                    </p>
                    <button
                      onClick={onOpenEvidenceModal}
                      className="px-6 py-2.5 bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold rounded-xl shadow-xs"
                    >
                      Open Evidence Submission Form
                    </button>
                  </div>
                </div>
              )}

              {/* Section 7: Assessment */}
              {activeSectionIndex === 6 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full uppercase">
                      Section 7 of 7 • Final Check
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Mastery Check</span>
                  </div>

                  <h2 className="font-sora text-2xl font-bold text-[#071B33]">
                    Communication & Conflict Resolution Check
                  </h2>

                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                    <div className="flex items-center gap-2 text-[#159A6C]">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-bold text-sm">You have worked through all primary stages!</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Once your evidence is approved by Mr. Emmanuel Okafor, this journey will be marked Completed and your Communication Pro badge will unlock.
                    </p>
                  </div>

                  <button
                    onClick={onOpenEvidenceModal}
                    className="w-full py-3 bg-[#071B33] hover:bg-[#0D2745] text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    Submit Evidence Now
                  </button>
                </div>
              )}

              {/* Action Bar at Bottom of Stage */}
              <div className="pt-6 mt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handlePrev}
                  disabled={activeSectionIndex === 0}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition-colors"
                >
                  Previous Section
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSaveProgress}
                    className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#071B33] transition-colors"
                  >
                    {isSaved ? '✓ Progress Saved' : 'Save Progress'}
                  </button>

                  {activeSectionIndex < sections.length - 1 ? (
                    <button
                      onClick={handleNext}
                      className="px-5 py-2 rounded-xl bg-[#071B33] hover:bg-[#0D2745] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenEvidenceModal}
                      className="px-5 py-2 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Submit Evidence</span>
                      <UploadCloud className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
